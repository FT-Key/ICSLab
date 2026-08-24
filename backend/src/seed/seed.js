import 'dotenv/config'
import mongoose from 'mongoose'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import Reading from '../models/Reading.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, './data/readings.json')
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ingenieria_software'

async function seed() {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  console.log('📦 Conectado a MongoDB')

  const data = JSON.parse(readFileSync(DATA_PATH, 'utf8'))

  const result = await Reading.deleteMany({})
  console.log(`🗑️  Eliminados ${result.deletedCount} documentos anteriores`)

  const inserted = await Reading.insertMany(data)
  console.log(`🌱 Seed completado: ${inserted.length} lecturas insertadas`)

  for (const r of inserted) {
    const chapters = r.chapters?.length || 0
    const swebok = r.swebokAreas?.length || 0
    console.log(`   → ${r.slug}: ${chapters} capítulos, ${swebok} áreas SWEBOK`)
  }

  await mongoose.disconnect()
  console.log('👋 Desconectado de MongoDB')
}

seed().catch((err) => {
  console.error('❌ No se pudo sembrar (¿está MongoDB corriendo?):', err.message)
  process.exit(1)
})
