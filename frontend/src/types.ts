// ── Content Blocks ─────────────────────────────────────
export interface TextBlock {
  type: 'text'
  content: string
}

export interface HeadingBlock {
  type: 'heading'
  content: string
  level: 2 | 3
}

export interface KeyPointsBlock {
  type: 'keypoints'
  items: string[]
}

export interface QuoteBlock {
  type: 'quote'
  content: string
  source?: string
}

export interface QuizBlock {
  type: 'quiz'
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface TrueFalseBlock {
  type: 'truefalse'
  statement: string
  correctAnswer: boolean
  explanation: string
}

export type ContentBlock =
  | TextBlock
  | HeadingBlock
  | KeyPointsBlock
  | QuoteBlock
  | QuizBlock
  | TrueFalseBlock

// ── Sections (= chapters) ─────────────────────────────
export interface Section {
  _id?: string
  title: string
  blocks: ContentBlock[]
}

// ── Topics ─────────────────────────────────────────────
export interface Topic {
  _id?: string
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  color: string
  tags: string[]
  sources: string[]
  sections: Section[]
  createdAt?: string
  updatedAt?: string
}
