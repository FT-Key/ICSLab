import { Router } from 'express'
import {
  getHealth,
  getReadings,
  getReadingBySlug,
  createReading,
  updateReading,
  deleteReading,
} from '../services/catalog.js'

const router = Router()

function asyncHandler(fn) {
  return (req, res) => {
    Promise.resolve(fn(req, res)).catch((err) => {
      const status = err.status || 400
      res.status(status).json({ error: 'Error en la solicitud' })
    })
  }
}

router.get('/health', asyncHandler(async (_req, res) => {
  res.json(await getHealth())
}))

router.get('/readings', asyncHandler(async (_req, res) => {
  res.json(await getReadings())
}))

router.get('/readings/:slug', asyncHandler(async (req, res) => {
  const reading = await getReadingBySlug(req.params.slug)
  if (!reading) return res.status(404).json({ error: 'Lectura no encontrada' })
  res.json(reading)
}))

router.post('/readings', asyncHandler(async (req, res) => {
  const reading = await createReading(req.body ?? {})
  res.status(201).json(reading)
}))

router.put('/readings/:slug', asyncHandler(async (req, res) => {
  const reading = await updateReading(req.params.slug, req.body ?? {})
  if (!reading) return res.status(404).json({ error: 'Lectura no encontrada' })
  res.json(reading)
}))

router.delete('/readings/:slug', asyncHandler(async (req, res) => {
  const deleted = await deleteReading(req.params.slug)
  if (!deleted) return res.status(404).json({ error: 'Lectura no encontrada' })
  res.json({ ok: true })
}))

export default router
