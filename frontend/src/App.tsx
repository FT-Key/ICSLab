import { Routes, Route } from 'react-router-dom'
import ReadingSummary from './pages/ReadingSummary'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ReadingSummary />} />
      <Route path="/unidad/:slug" element={<ReadingSummary />} />
      <Route path="/unidad/:slug/capitulo/:chapterIndex" element={<ReadingSummary />} />
      {/* Compatibilidad con la ruta anterior (una sola lectura): redirige a Unidad 1 */}
      <Route path="/lectura/:chapterIndex" element={<ReadingSummary legacy />} />
    </Routes>
  )
}
