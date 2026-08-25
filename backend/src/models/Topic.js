import mongoose, { Schema, model } from 'mongoose'

const textBlockSchema = new Schema({
  type: { type: String, enum: ['text'], required: true },
  content: { type: String, required: true },
}, { _id: false })

const headingBlockSchema = new Schema({
  type: { type: String, enum: ['heading'], required: true },
  content: { type: String, required: true },
  level: { type: Number, enum: [2, 3], required: true },
}, { _id: false })

const keyPointsBlockSchema = new Schema({
  type: { type: String, enum: ['keypoints'], required: true },
  items: [{ type: String, required: true }],
}, { _id: false })

const quoteBlockSchema = new Schema({
  type: { type: String, enum: ['quote'], required: true },
  content: { type: String, required: true },
  source: String,
}, { _id: false })

const quizBlockSchema = new Schema({
  type: { type: String, enum: ['quiz'], required: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctIndex: { type: Number, required: true },
  explanation: { type: String, required: true },
}, { _id: false })

const trueFalseBlockSchema = new Schema({
  type: { type: String, enum: ['truefalse'], required: true },
  statement: { type: String, required: true },
  correctAnswer: { type: Boolean, required: true },
  explanation: { type: String, required: true },
}, { _id: false })

const contentBlockSchema = new Schema({
  type: {
    type: String,
    enum: ['text', 'heading', 'keypoints', 'quote', 'quiz', 'truefalse'],
    required: true,
  },
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
}, { _id: false })

const sectionSchema = new Schema({
  title: { type: String, required: true },
  blocks: [contentBlockSchema],
}, { _id: false })

const topicSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
  tags: [{ type: String }],
  sources: [{ type: String }],
  sections: [sectionSchema],
}, { timestamps: true })

const Topic = mongoose.models.Topic || model('Topic', topicSchema)
export default Topic
