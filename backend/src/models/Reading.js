import { Schema, model } from 'mongoose'

const keyPointSchema = new Schema(
  { text: { type: String, required: true } },
  { _id: false }
)

const chapterSchema = new Schema(
  {
    num: { type: Number, required: true },
    title: { type: String, required: true },
    what: { type: String, required: true },
    keyPoints: [keyPointSchema],
    quote: String,
  },
  { _id: false }
)

const swebokAreaSchema = new Schema(
  {
    area: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { _id: false }
)

const readingSchema = new Schema(
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

export default model('Reading', readingSchema)
