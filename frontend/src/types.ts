export interface KeyPoint {
  text: string
}

export interface Chapter {
  num: number
  title: string
  what: string
  keyPoints: KeyPoint[]
  quote?: string
}

export interface SwebokArea {
  area: string
  desc: string
}

export interface Reading {
  _id?: string
  slug: string
  bookTitle: string
  author: string
  edition?: string
  chapters: Chapter[]
  swebokAreas: SwebokArea[]
  comparison?: {
    title: string
    items: string[]
  }
  bookMeta?: {
    label: string
    desc: string
  }
  createdAt?: string
  updatedAt?: string
}
