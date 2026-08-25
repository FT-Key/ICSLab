import type { Topic } from '../types'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`API ${res.status}: ${text || res.statusText}`)
  }
  return res.json() as Promise<T>
}

export const api = {
  health: () => request<{ status: string; topics: number }>('/health'),
  topics: () => request<Topic[]>('/topics'),
  topic: (slug: string) => request<Topic>(`/topics/${slug}`),
}
