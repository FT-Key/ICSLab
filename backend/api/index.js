import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/* ── MongoDB (lazy singleton) ─────────────────────────── */
let connected = false
async function ensureDB() {
  if (connected) return
  const uri = process.env.MONGODB_URI
  if (!uri) return
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 4000 })
    connected = true
  } catch {
    connected = false
  }
}

function isDbConnected() {
  return mongoose.connection.readyState === 1
}

/* ── Fallback JSON data ───────────────────────────────── */
let fallbackData = null
function loadFallback() {
  if (!fallbackData) {
    try {
      const p = path.resolve(__dirname, '../src/seed/data/topics.json')
      fallbackData = JSON.parse(readFileSync(p, 'utf8'))
    } catch {
      fallbackData = []
    }
  }
  return fallbackData
}

/* ── Catalog service (inline) ─────────────────────────── */
async function getHealth() {
  if (isDbConnected()) {
    const count = await mongoose.connection.db.collection('topics').countDocuments()
    return { status: 'mongodb', topics: count }
  }
  return { status: 'fallback', topics: loadFallback().length }
}

async function getTopics() {
  if (isDbConnected()) {
    const Topic = mongoose.connection.db.collection('topics')
    return Topic.find().sort({ createdAt: 1 }).toArray()
  }
  return loadFallback()
}

async function getTopicBySlug(slug) {
  if (isDbConnected()) {
    const Topic = mongoose.connection.db.collection('topics')
    return Topic.findOne({ slug })
  }
  return loadFallback().find((t) => t.slug === slug) || null
}

/* ── Lightweight Express app ──────────────────────────── */
const app = express()

app.use(cors({
  origin: (origin, cb) => {
    const allowed = [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:4002',
      'http://localhost:3000',
      'https://icslab.vercel.app',
    ]
    if (!origin || allowed.includes(origin)) return cb(null, true)
    cb(null, true) // allow all in API-only mode
  },
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}))

app.use(express.json({ limit: '50kb' }))

app.get('/api/health', async (_req, res) => {
  try {
    res.json(await getHealth())
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.get('/api/topics', async (_req, res) => {
  try {
    res.json(await getTopics())
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.get('/api/topics/:slug', async (req, res) => {
  try {
    const topic = await getTopicBySlug(req.params.slug)
    if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
    res.json(topic)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

/* ── Vercel serverless handler ────────────────────────── */
export default async function handler(req, res) {
  await ensureDB()
  return app(req, res)
}
