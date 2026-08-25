import { Router } from 'express'
import {
  getHealth, getTopics, getTopicBySlug,
  createTopic, updateTopic, deleteTopic,
} from '../services/catalog.js'

const router = Router()

function asyncHandler(fn) {
  return (req, res) => {
    Promise.resolve(fn(req, res)).catch((err) => {
      const status = err.status || 400
      res.status(status).json({ error: err.message || 'Error en la solicitud' })
    })
  }
}

router.get('/health', asyncHandler(async (_req, res) => {
  res.json(await getHealth())
}))

router.get('/topics', asyncHandler(async (_req, res) => {
  res.json(await getTopics())
}))

router.get('/topics/:slug', asyncHandler(async (req, res) => {
  const topic = await getTopicBySlug(req.params.slug)
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.post('/topics', asyncHandler(async (req, res) => {
  const topic = await createTopic(req.body)
  res.status(201).json(topic)
}))

router.put('/topics/:slug', asyncHandler(async (req, res) => {
  const topic = await updateTopic(req.params.slug, req.body)
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.delete('/topics/:slug', asyncHandler(async (req, res) => {
  const topic = await deleteTopic(req.params.slug)
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json({ ok: true })
}))

export default router
