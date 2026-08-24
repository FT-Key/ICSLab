import Reading from '../models/Reading.js'
import { isDbConnected } from '../config/db.js'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, '../seed/data/readings.json')

let fallbackData = null

function loadFallback() {
  if (!fallbackData) {
    fallbackData = JSON.parse(readFileSync(DATA_PATH, 'utf8'))
  }
  return fallbackData
}

export async function getHealth() {
  const connected = isDbConnected()
  let count = 0
  if (connected) {
    count = await Reading.countDocuments()
  } else {
    count = loadFallback().length
  }
  return { status: connected ? 'mongodb' : 'fallback', readings: count }
}

export async function getReadings() {
  if (isDbConnected()) {
    return Reading.find().sort({ createdAt: 1 }).lean()
  }
  return loadFallback()
}

export async function getReadingBySlug(slug) {
  if (isDbConnected()) {
    return Reading.findOne({ slug }).lean()
  }
  return loadFallback().find((r) => r.slug === slug) || null
}

export async function createReading(data) {
  if (!isDbConnected()) {
    throw { status: 503, message: 'MongoDB no conectado' }
  }
  const reading = await Reading.create(data)
  return reading.toObject()
}

export async function updateReading(slug, data) {
  if (!isDbConnected()) {
    throw { status: 503, message: 'MongoDB no conectado' }
  }
  return Reading.findOneAndUpdate({ slug }, data, { new: true, runValidators: true }).lean()
}

export async function deleteReading(slug) {
  if (!isDbConnected()) {
    throw { status: 503, message: 'MongoDB no conectado' }
  }
  return Reading.findOneAndDelete({ slug }).lean()
}
