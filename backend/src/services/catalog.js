import Topic from '../models/Topic.js'
import { isDbConnected } from '../config/db.js'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, '../seed/data/topics.json')
let fallbackData = null

function loadFallback() {
  if (!fallbackData) fallbackData = JSON.parse(readFileSync(DATA_PATH, 'utf8'))
  return fallbackData
}

export async function getHealth() {
  if (isDbConnected()) {
    const count = await Topic.countDocuments()
    return { status: 'mongodb', topics: count }
  }
  return { status: 'fallback', topics: loadFallback().length }
}

export async function getTopics() {
  if (isDbConnected()) {
    return Topic.find().sort({ createdAt: 1 }).lean()
  }
  return loadFallback()
}

export async function getTopicBySlug(slug) {
  if (isDbConnected()) {
    return Topic.findOne({ slug }).lean()
  }
  return loadFallback().find((t) => t.slug === slug) || null
}

export async function createTopic(data) {
  if (!isDbConnected()) {
    const err = new Error('Base de datos no disponible')
    err.status = 503
    throw err
  }
  return Topic.create(data)
}

export async function updateTopic(slug, data) {
  if (!isDbConnected()) {
    const err = new Error('Base de datos no disponible')
    err.status = 503
    throw err
  }
  return Topic.findOneAndUpdate({ slug }, data, { new: true, runValidators: true }).lean()
}

export async function deleteTopic(slug) {
  if (!isDbConnected()) {
    const err = new Error('Base de datos no disponible')
    err.status = 503
    throw err
  }
  return Topic.findOneAndDelete({ slug })
}
