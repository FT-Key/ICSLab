import { Routes, Route } from 'react-router-dom'
import ReadingSummary from './pages/ReadingSummary'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ReadingSummary />} />
      <Route path="/lectura/:chapterIndex" element={<ReadingSummary />} />
    </Routes>
  )
}
