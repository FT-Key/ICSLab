import 'dotenv/config'
import mongoose from 'mongoose'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { Schema, model } from 'mongoose'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, './data/topics.json')
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ingenieria_software'

const topicSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
  tags: [{ type: String }],
  sources: [{ type: String }],
  sections: [{
    title: { type: String, required: true },
    blocks: [{
      type: { type: String, required: true },
      content: String,
      level: Number,
      items: [String],
      source: String,
      question: String,
      options: [String],
      correctIndex: Number,
      explanation: String,
      statement: String,
      correctAnswer: Boolean,
    }],
  }],
}, { timestamps: true })

const Topic = mongoose.models.Topic || model('Topic', topicSchema)

async function seed() {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  console.log('Connected to MongoDB')

  const data = JSON.parse(readFileSync(DATA_PATH, 'utf8'))

  const result = await Topic.deleteMany({})
  console.log(`Deleted ${result.deletedCount} previous topics`)

  const inserted = await Topic.insertMany(data)
  console.log(`Seed completed: ${inserted.length} topics inserted`)

  for (const t of inserted) {
    const blocks = t.sections?.reduce((sum, s) => sum + (s.blocks?.length || 0), 0) || 0
    console.log(`  -> ${t.slug}: ${t.sections?.length || 0} sections, ${blocks} blocks`)
  }

  await mongoose.disconnect()
  console.log('Disconnected from MongoDB')
}

seed().catch((err) => {
  console.error('Could not seed:', err.message)
  process.exit(1)
})
