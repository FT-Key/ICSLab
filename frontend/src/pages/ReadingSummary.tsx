import { useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { BookOpen, ArrowRight, CheckCircle, XCircle, ArrowLeft } from '@phosphor-icons/react'
import BentoCard from '../components/BentoCard'
import ChapterNav from '../components/ChapterNav'
import { useAsync } from '../hooks/useAsync'
import { api } from '../api/client'
import type { Topic, ContentBlock, QuizBlock, TrueFalseBlock } from '../types'

const STORAGE_KEY = 'icslab-completed-chapters'

function loadCompleted(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch { return new Set() }
}

function saveCompleted(set: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]))
}

/* ── Loading / Error ────────────────────────────────── */
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-[#111827]/30 border-t-[#111827] animate-spin rounded-full" />
    </div>
  )
}

function ErrorState({ error, onRetry }: { error: string; onRetry: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="rounded-lg border border-black/5 bg-white/70 p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-mono text-black/50 mb-4">ERROR</p>
        <p className="text-sm text-black/60 mb-4">{error}</p>
        <button
          onClick={onRetry}
          className="rounded-lg bg-[#111827] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Reintentar
        </button>
      </div>
    </div>
  )
}

/* ── Interactive blocks ──────────────────────────────── */
function QuizBlockComponent({ block }: { block: QuizBlock }) {
  const [selected, setSelected] = useState<number | null>(null)
  const answered = selected !== null
  const correct = answered && selected === block.correctIndex

  return (
    <div className="rounded-lg border border-black/10 bg-white/80 p-5">
      <p className="text-sm font-semibold text-[#111827] mb-3">{block.question}</p>
      <div className="space-y-2">
        {block.options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrect = i === block.correctIndex
          let cls = 'border-black/10 bg-white hover:bg-black/5'
          if (answered && isCorrect) cls = 'border-green-500/50 bg-green-50'
          if (answered && isSelected && !isCorrect) cls = 'border-red-500/50 bg-red-50'

          return (
            <button
              key={i}
              onClick={() => !answered && setSelected(i)}
              disabled={answered}
              className={`flex w-full items-center gap-3 rounded-md border px-4 py-2.5 text-left text-sm transition-colors ${cls}`}
            >
              {answered && isCorrect && <CheckCircle size={16} className="text-green-600 shrink-0" />}
              {answered && isSelected && !isCorrect && <XCircle size={16} className="text-red-500 shrink-0" />}
              <span>{opt}</span>
            </button>
          )
        })}
      </div>
      {answered && (
        <p className={`mt-3 text-xs ${correct ? 'text-green-600' : 'text-red-500'}`}>
          {correct ? 'Correcto' : 'Incorrecto'}: {block.explanation}
        </p>
      )}
    </div>
  )
}

function TrueFalseBlockComponent({ block }: { block: TrueFalseBlock }) {
  const [selected, setSelected] = useState<boolean | null>(null)
  const answered = selected !== null
  const correct = answered && selected === block.correctAnswer

  return (
    <div className="rounded-lg border border-black/10 bg-white/80 p-5">
      <p className="text-sm font-semibold text-[#111827] mb-3">{block.statement}</p>
      <div className="flex gap-3">
        {[
          { label: 'Verdadero', value: true },
          { label: 'Falso', value: false },
        ].map((opt) => {
          const isSelected = selected === opt.value
          const isCorrect = opt.value === block.correctAnswer
          let cls = 'border-black/10 bg-white hover:bg-black/5'
          if (answered && isCorrect) cls = 'border-green-500/50 bg-green-50'
          if (answered && isSelected && !isCorrect) cls = 'border-red-500/50 bg-red-50'

          return (
            <button
              key={opt.label}
              onClick={() => !answered && setSelected(opt.value)}
              disabled={answered}
              className={`flex-1 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${cls}`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
      {answered && (
        <p className={`mt-3 text-xs ${correct ? 'text-green-600' : 'text-red-500'}`}>
          {correct ? 'Correcto' : 'Incorrecto'}: {block.explanation}
        </p>
      )}
    </div>
  )
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'heading':
      return block.level === 2 ? (
        <h3 className="text-xl font-bold tracking-tight mt-8 mb-3 first:mt-0">{block.content}</h3>
      ) : (
        <h4 className="text-base font-semibold mt-5 mb-2 text-black/80">{block.content}</h4>
      )
    case 'text':
      return <p className="text-sm leading-relaxed text-black/70 my-3">{block.content}</p>
    case 'keypoints':
      return (
        <ul className="space-y-2 my-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-black/70">
              <ArrowRight size={14} className="mt-0.5 shrink-0 text-[#FAD4C0]" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <div className="my-4 rounded-md border border-black/5 bg-[#FFF5E6]/60 px-4 py-3 text-xs italic text-black/50">
          &ldquo;{block.content}&rdquo;
          {block.source && <span className="not-italic ml-2 text-black/40">&mdash; {block.source}</span>}
        </div>
      )
    case 'quiz':
      return <QuizBlockComponent block={block} />
    case 'truefalse':
      return <TrueFalseBlockComponent block={block} />
    default:
      return null
  }
}

/* ── Home: Single card ───────────────────────────────── */
function TopicHomeCard({ topic, onClick }: { topic: Topic; onClick: () => void }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-2xl cursor-pointer"
      onClick={onClick}
    >
      <BentoCard className="hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow">
        <div className="flex items-center gap-4 mb-5">
          <span className="grid h-14 w-14 place-items-center rounded-xl text-xl font-bold text-white bg-[#111827]">
            {topic.icon || topic.title.charAt(0)}
          </span>
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-black/50">
              {topic.subtitle}
            </p>
            <h2 className="text-2xl font-bold tracking-tight">{topic.title}</h2>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-black/60 mb-5">{topic.description}</p>

        {/* Chapter preview */}
        <div className="space-y-2 mb-5">
          {topic.sections.map((section, i) => (
            <div key={i} className="flex items-center gap-3 rounded-md border border-black/5 bg-white/60 px-3 py-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/5 text-[10px] font-bold text-black/50">
                {i + 1}
              </span>
              <span className="text-xs font-medium text-black/70 truncate">{section.title}</span>
              <span className="ml-auto text-[10px] text-black/40">{section.blocks.length} bloques</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {topic.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-black/60">
              {tag}
            </span>
          ))}
        </div>

        <div className="rounded-lg bg-[#111827] px-5 py-3 text-center text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
          Abrir lectura &rarr;
        </div>
      </BentoCard>
    </motion.div>
  )
}

/* ── Chapter detail view ─────────────────────────────── */
function ChapterView({ topic, chapterIndex }: { topic: Topic; chapterIndex: number }) {
  const navigate = useNavigate()
  const [completed, setCompleted] = useState<Set<number>>(loadCompleted)
  const section = topic.sections[chapterIndex]

  const handleSelect = useCallback((i: number) => {
    navigate(`/lectura/${i}`)
  }, [navigate])

  const handleToggleComplete = useCallback((i: number) => {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      saveCompleted(next)
      return next
    })
  }, [])

  if (!section) {
    return (
      <div className="text-center py-20 text-black/50">
        Capítulo no encontrado.
      </div>
    )
  }

  return (
    <div>
      <ChapterNav
        total={topic.sections.length}
        current={chapterIndex}
        completed={completed}
        onSelect={handleSelect}
        onToggleComplete={handleToggleComplete}
      />

      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Back to home */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-1 text-sm font-medium text-black/50 hover:text-[#111827] transition-colors"
        >
          <ArrowLeft size={14} />
          Volver al inicio
        </button>

        {/* Chapter header */}
        <div className="mb-8">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-black/40 mb-1">
            Capítulo {chapterIndex + 1} de {topic.sections.length}
          </p>
          <h1 className="text-3xl font-bold tracking-tight leading-tight">{section.title}</h1>
        </div>

        {/* Content blocks */}
        <div className="space-y-4">
          {section.blocks.map((block, bi) => (
            <ContentBlockRenderer key={bi} block={block} />
          ))}
        </div>

        {/* Bottom navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-6">
          {chapterIndex > 0 ? (
            <button
              onClick={() => handleSelect(chapterIndex - 1)}
              className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-black/70 transition-all hover:bg-black/5"
            >
              <ArrowLeft size={16} />
              Capítulo anterior
            </button>
          ) : <div />}

          {chapterIndex < topic.sections.length - 1 ? (
            <button
              onClick={() => handleSelect(chapterIndex + 1)}
              className="flex items-center gap-2 rounded-lg bg-[#111827] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Siguiente capítulo
              <ArrowRight size={16} />
            </button>
          ) : (
            <div className="text-sm text-green-600 font-medium flex items-center gap-1">
              <CheckCircle size={16} weight="fill" />
              ¡Completaste la lectura!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────────────── */
export default function ReadingSummary() {
  const { chapterIndex } = useParams<{ chapterIndex: string }>()
  const navigate = useNavigate()
  const { data: topics, error, loading, reload } = useAsync<Topic[]>(() => api.topics(), [])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorState error={error.message} onRetry={reload} />
  if (!topics?.length) {
    return <ErrorState error="No se encontraron temas. Ejecuta el seeder." onRetry={reload} />
  }

  const topic = topics[0]
  const idx = chapterIndex !== undefined ? parseInt(chapterIndex, 10) : -1
  const isDetailView = !isNaN(idx) && idx >= 0 && idx < (topic?.sections.length ?? 0)

  return (
    <div className="bg-[#FFF5E6] font-[system-ui] text-[#111827] antialiased min-h-screen">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#FFF5E6]/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2 text-sm font-semibold cursor-pointer" onClick={() => navigate('/')}>
            <span className="grid h-6 w-6 place-items-center rounded-md bg-[#FAD4C0] text-xs font-bold text-[#111827]">
              IS
            </span>
            Ingenieria de Software
          </div>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-4rem)]">
        {isDetailView ? (
          <ChapterView topic={topic} chapterIndex={idx} />
        ) : (
          <div className="mx-auto max-w-6xl px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-2xl text-center mb-12"
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70">
                <BookOpen size={14} weight="fill" className="text-[#111827]" />
                {topic.sections.length} capítulos
              </span>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Fundamentos de<br />Ingenieria de Software
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-black/60">
                Contenido interactivo basado en Sommerville, Pressman y el guia SWEBOK.
              </p>
            </motion.div>

            <TopicHomeCard topic={topic} onClick={() => navigate('/lectura/0')} />
          </div>
        )}
      </main>

      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-black/50 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Ingenieria y Calidad de Software</span>
        </div>
      </footer>
    </div>
  )
}
