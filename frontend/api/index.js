const serverless = require('serverless-http')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// ── Model ──────────────────────────────────────────────
const keyPointSchema = new mongoose.Schema(
  { text: { type: String, required: true } },
  { _id: false }
)

const chapterSchema = new mongoose.Schema(
  {
    num: { type: Number, required: true },
    title: { type: String, required: true },
    what: { type: String, required: true },
    keyPoints: [keyPointSchema],
    quote: String,
  },
  { _id: false }
)

const swebokAreaSchema = new mongoose.Schema(
  {
    area: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { _id: false }
)

const readingSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    bookTitle: { type: String, required: true },
    author: { type: String, required: true },
    edition: String,
    chapters: [chapterSchema],
    swebokAreas: [swebokAreaSchema],
    comparison: {
      title: String,
      items: [String],
    },
    bookMeta: {
      label: String,
      desc: String,
    },
  },
  { timestamps: true }
)

const Reading = mongoose.models.Reading || mongoose.model('Reading', readingSchema)

// ── Fallback data ──────────────────────────────────────
const readingsData = require('./seed/data/readings.json')

// ── MongoDB connection (cached across invocations) ─────
let cached = null

async function connectDB() {
  if (cached) return cached
  const uri = process.env.MONGODB_URI
  if (!uri) return null
  try {
    cached = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 4000,
      maxPoolSize: 1,
    })
    return cached
  } catch {
    cached = null
    return null
  }
}

// ── Express app ────────────────────────────────────────
const app = express()

app.use(cors({ origin: true }))
app.use(express.json({ limit: '50kb' }))

// Health
app.get('/api/health', async (_req, res) => {
  const connected = await connectDB()
  let count = 0
  if (connected) {
    count = await Reading.countDocuments()
  } else {
    count = readingsData.length
  }
  res.json({ status: connected ? 'mongodb' : 'fallback', readings: count })
})

// List all readings
app.get('/api/readings', async (_req, res) => {
  const connected = await connectDB()
  if (connected) {
    const readings = await Reading.find().sort({ createdAt: 1 }).lean()
    return res.json(readings)
  }
  res.json(readingsData)
})

// Get single reading by slug
app.get('/api/readings/:slug', async (req, res) => {
  const connected = await connectDB()
  if (connected) {
    const reading = await Reading.findOne({ slug: req.params.slug }).lean()
    if (!reading) return res.status(404).json({ error: 'Lectura no encontrada' })
    return res.json(reading)
  }
  const reading = readingsData.find((r) => r.slug === req.params.slug)
  if (!reading) return res.status(404).json({ error: 'Lectura no encontrada' })
  res.json(reading)
})

// Catch-all: SPA fallback
app.get('*', (_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

// ── Export for Vercel ──────────────────────────────────
module.exports = app
module.exports.handler = serverless(app)
