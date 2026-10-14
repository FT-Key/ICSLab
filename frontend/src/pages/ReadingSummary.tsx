import { useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  BookOpen, ArrowRight, CheckCircle, XCircle, ArrowLeft,
  GraduationCap, PenNib, Books,
} from '@phosphor-icons/react'
import BentoCard from '../components/BentoCard'
import ChapterNav from '../components/ChapterNav'
import { useAsync } from '../hooks/useAsync'
import { api } from '../api/client'
import type { Topic, ContentBlock, QuizBlock, TrueFalseBlock, SectionCategory } from '../types'

/* ── Progreso por unidad (localStorage) ───────────────────── */
function loadCompleted(slug: string): Set<number> {
  try {
    const raw = localStorage.getItem(`icslab-completed-${slug}`)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch { return new Set() }
}

function saveCompleted(slug: string, set: Set<number>) {
  localStorage.setItem(`icslab-completed-${slug}`, JSON.stringify([...set]))
}

/* ── Categorías (skill bento: tokens Primary/Secondary/Success) ── */
const CATEGORY_META: Record<SectionCategory, { label: string; badge: string; icon: typeof Books }> = {
  material: {
    label: 'Material de estudio',
    badge: 'bg-[#80A1C1]/20 text-[#2c4a63] border border-[#80A1C1]/40',
    icon: GraduationCap,
  },
  lectura: {
    label: 'Lectura recomendada',
    badge: 'bg-[#FAD4C0]/40 text-[#7c4a2d] border border-[#FAD4C0]',
    icon: Books,
  },
  ejercicio: {
    label: 'Ejercicio resuelto',
    badge: 'bg-green-100 text-green-800 border border-green-300',
    icon: PenNib,
  },
}

function categoryOf(title: string): SectionCategory {
  const t = title.toLowerCase()
  if (t.startsWith('material')) return 'material'
  if (t.includes('ejercicio') || t.includes('resuelto')) return 'ejercicio'
  return 'lectura'
}

function CategoryBadge({ category }: { category: SectionCategory }) {
  const meta = CATEGORY_META[category]
  const Icon = meta.icon
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
      <Icon size={14} weight="fill" />
      {meta.label}
    </span>
  )
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
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="rounded-lg border border-black/5 bg-white/70 p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <p className="text-sm font-mono text-black/50 mb-4">ERROR</p>
        <p className="text-base text-black/60 mb-4">{error}</p>
        <button
          onClick={onRetry}
          className="rounded-lg bg-[#111827] px-5 py-2.5 text-base font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Reintentar
        </button>
      </div>
    </div>
  )
}

/* ── Interactive blocks (tipografía agrandada para lectura cómoda) ── */
function QuizBlockComponent({ block }: { block: QuizBlock }) {
  const [selected, setSelected] = useState<number | null>(null)
  const answered = selected !== null
  const correct = answered && selected === block.correctIndex

  return (
    <div className="rounded-lg border border-black/10 bg-white/80 p-5 md:p-6">
      <p className="text-base md:text-lg font-semibold text-[#111827] mb-4">{block.question}</p>
      <div className="space-y-2.5">
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
              className={`flex w-full items-center gap-3 rounded-md border px-4 py-3 text-left text-base md:text-lg transition-colors ${cls}`}
            >
              {answered && isCorrect && <CheckCircle size={18} className="text-green-600 shrink-0" />}
              {answered && isSelected && !isCorrect && <XCircle size={18} className="text-red-500 shrink-0" />}
              <span>{opt}</span>
            </button>
          )
        })}
      </div>
      {answered && (
        <p className={`mt-4 text-sm md:text-base ${correct ? 'text-green-600' : 'text-red-500'}`}>
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
    <div className="rounded-lg border border-black/10 bg-white/80 p-5 md:p-6">
      <p className="text-base md:text-lg font-semibold text-[#111827] mb-4">{block.statement}</p>
      <div className="flex flex-col sm:flex-row gap-3">
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
              className={`flex-1 rounded-md border px-4 py-3 text-base md:text-lg font-medium transition-colors ${cls}`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
      {answered && (
        <p className={`mt-4 text-sm md:text-base ${correct ? 'text-green-600' : 'text-red-500'}`}>
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
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-4 first:mt-0">{block.content}</h3>
      ) : (
        <h4 className="text-lg md:text-xl font-semibold mt-7 mb-3 text-black/80">{block.content}</h4>
      )
    case 'text':
      return <p className="text-base md:text-lg leading-relaxed text-black/75 my-4">{block.content}</p>
    case 'keypoints':
      return (
        <ul className="space-y-2.5 my-5 rounded-lg border border-black/5 bg-white/60 p-4 md:p-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-base md:text-lg text-black/75">
              <ArrowRight size={16} className="mt-1.5 shrink-0 text-[#80A1C1]" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <div className="my-5 rounded-md border border-black/5 bg-[#FAD4C0]/30 px-5 py-4 text-sm md:text-base italic text-black/60">
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

/* ── Home: grilla responsive de las 3 unidades ─────────────── */
function UnitCard({ topic, onClick, index }: { topic: Topic; onClick: () => void; index: number }) {
  const reduce = useReducedMotion()
  const cats = (c: SectionCategory) =>
    topic.sections.filter((s) => (s.category ?? categoryOf(s.title)) === c).length
  const done = loadCompleted(topic.slug).size
  const total = topic.sections.length

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="cursor-pointer h-full"
      onClick={onClick}
    >
      <BentoCard className="h-full bg-white/70 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <span
            className="grid h-14 w-14 shrink-0 place-items-center rounded-xl text-2xl font-bold text-white"
            style={{ backgroundColor: topic.color || '#111827' }}
          >
            {topic.icon || topic.title.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-black/50 truncate">
              {topic.subtitle}
            </p>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-snug">{topic.title}</h2>
          </div>
        </div>
        <p className="text-base leading-relaxed text-black/60 mb-5">{topic.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {cats('material') > 0 && (
            <span className="rounded-full bg-[#80A1C1]/20 px-2.5 py-1 text-xs font-semibold text-[#2c4a63]">
              {cats('material')} material
            </span>
          )}
          {cats('lectura') > 0 && (
            <span className="rounded-full bg-[#FAD4C0]/40 px-2.5 py-1 text-xs font-semibold text-[#7c4a2d]">
              {cats('lectura')} lectura
            </span>
          )}
          {cats('ejercicio') > 0 && (
            <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-800">
              {cats('ejercicio')} ejercicio
            </span>
          )}
        </div>

        {total > 0 && (
          <div className="mb-4">
            <div className="h-2 rounded-full bg-black/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-green-500 transition-all"
                style={{ width: `${Math.round((done / total) * 100)}%` }}
              />
            </div>
            <p className="mt-1.5 text-xs text-black/50">{done} de {total} secciones completadas</p>
          </div>
        )}

        <div className="mt-auto rounded-lg bg-[#111827] px-5 py-3 text-center text-base font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
          Abrir unidad &rarr;
        </div>
      </BentoCard>
    </motion.div>
  )
}

/* ── Vista de unidad: secciones agrupadas por categoría ───── */
function UnitOverview({ topic }: { topic: Topic }) {
  const navigate = useNavigate()
  const completed = loadCompleted(topic.slug)
  const groups: { key: SectionCategory; heading: string; desc: string }[] = [
    { key: 'material', heading: 'Material de estudio', desc: 'Lo visto en clase: la base de cada unidad.' },
    { key: 'lectura', heading: 'Lectura recomendada', desc: 'Bibliografía: Sommerville, Pressman y SWEBOK.' },
    { key: 'ejercicio', heading: 'Ejercicios resueltos', desc: 'Ejemplos resueltos paso a paso para aprender el cómo.' },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14">
      <button
        onClick={() => navigate('/')}
        className="mb-6 flex items-center gap-1 text-base font-medium text-black/50 hover:text-[#111827] transition-colors"
      >
        <ArrowLeft size={16} />
        Todas las unidades
      </button>

      <div className="flex items-center gap-4 mb-4">
        <span
          className="grid h-14 w-14 md:h-16 md:w-16 shrink-0 place-items-center rounded-xl text-2xl font-bold text-white"
          style={{ backgroundColor: topic.color || '#111827' }}
        >
          {topic.icon || topic.title.charAt(0)}
        </span>
        <div>
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-black/50">
            {topic.subtitle}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{topic.title}</h1>
        </div>
      </div>
      <p className="text-base md:text-lg leading-relaxed text-black/60 max-w-3xl mb-4">{topic.description}</p>
      {topic.sources.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-10">
          {topic.sources.map((s) => (
            <span key={s} className="rounded-md bg-black/5 px-2.5 py-1 text-xs font-medium text-black/60">
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="space-y-10">
        {groups.map((g) => {
          const items = topic.sections
            .map((s, i) => ({ s, i }))
            .filter(({ s }) => (s.category ?? categoryOf(s.title)) === g.key)
          if (!items.length) return null
          return (
            <section key={g.key}>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">{g.heading}</h2>
                <CategoryBadge category={g.key} />
              </div>
              <p className="text-base text-black/55 mb-4">{g.desc}</p>
              <div className="grid gap-3 md:grid-cols-2">
                {items.map(({ s, i }) => (
                  <button
                    key={i}
                    onClick={() => navigate(`/unidad/${topic.slug}/capitulo/${i}`)}
                    className="flex items-center gap-3 rounded-lg border border-black/5 bg-white/70 px-4 py-3.5 text-left shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-xs font-bold text-black/60">
                      {completed.has(i) ? <CheckCircle size={18} weight="fill" className="text-green-600" /> : i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-medium text-black/80 leading-snug">{s.title}</span>
                      <span className="block text-xs text-black/40 mt-0.5">{s.blocks.length} bloques</span>
                    </span>
                    <ArrowRight size={16} className="ml-auto shrink-0 text-black/30" />
                  </button>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

/* ── Vista de capítulo dentro de una unidad ───────────────── */
function ChapterView({ topic, chapterIndex }: { topic: Topic; chapterIndex: number }) {
  const navigate = useNavigate()
  const [completed, setCompleted] = useState<Set<number>>(() => loadCompleted(topic.slug))
  const section = topic.sections[chapterIndex]
  const category = section ? (section.category ?? categoryOf(section.title)) : 'lectura'

  const handleSelect = useCallback((i: number) => {
    navigate(`/unidad/${topic.slug}/capitulo/${i}`)
  }, [navigate, topic.slug])

  const handleToggleComplete = useCallback((i: number) => {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      saveCompleted(topic.slug, next)
      return next
    })
  }, [topic.slug])

  if (!section) {
    return <div className="text-center py-20 text-lg text-black/50">Capítulo no encontrado.</div>
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

      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 md:py-12">
        <button
          onClick={() => navigate(`/unidad/${topic.slug}`)}
          className="mb-6 flex items-center gap-1 text-base font-medium text-black/50 hover:text-[#111827] transition-colors"
        >
          <ArrowLeft size={16} />
          Volver a {topic.title.split('—')[0].trim()}
        </button>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-black/40">
              Sección {chapterIndex + 1} de {topic.sections.length}
            </p>
            <CategoryBadge category={category} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{section.title}</h1>
        </div>

        <div className="space-y-5">
          {section.blocks.map((block, bi) => (
            <ContentBlockRenderer key={bi} block={block} />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-black/10 pt-6">
          {chapterIndex > 0 ? (
            <button
              onClick={() => handleSelect(chapterIndex - 1)}
              className="flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-3 text-base font-medium text-black/70 transition-all hover:bg-black/5"
            >
              <ArrowLeft size={16} />
              Sección anterior
            </button>
          ) : <div />}

          {chapterIndex < topic.sections.length - 1 ? (
            <button
              onClick={() => handleSelect(chapterIndex + 1)}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#111827] px-5 py-3 text-base font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Siguiente sección
              <ArrowRight size={16} />
            </button>
          ) : (
            <div className="text-base text-green-600 font-medium flex items-center gap-1">
              <CheckCircle size={18} weight="fill" />
              ¡Completaste esta unidad!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Componente principal: home / unidad / capítulo ───────── */
export default function ReadingSummary({ legacy = false }: { legacy?: boolean }) {
  const { slug, chapterIndex } = useParams<{ slug: string; chapterIndex: string }>()
  const navigate = useNavigate()
  const { data: topics, error, loading, reload } = useAsync<Topic[]>(() => api.topics(), [])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorState error={error.message} onRetry={reload} />
  if (!topics?.length) {
    return <ErrorState error="No se encontraron temas. Ejecuta el seeder." onRetry={reload} />
  }

  const topic = slug ? topics.find((t) => t.slug === slug) : undefined
  if (slug && !topic) {
    return <ErrorState error="Unidad no encontrada." onRetry={() => navigate('/')} />
  }

  // Compatibilidad: /lectura/:chapterIndex → primer topic (Unidad 1)
  const legacyIdx = legacy && chapterIndex !== undefined ? parseInt(chapterIndex, 10) : NaN
  const idx = chapterIndex !== undefined && !legacy ? parseInt(chapterIndex, 10) : legacyIdx
  const activeTopic = topic ?? (legacy ? topics.find((t) => t.slug.includes('unidad-1')) ?? topics[0] : undefined)
  const isDetailView =
    activeTopic && !isNaN(idx) && idx >= 0 && idx < activeTopic.sections.length

  return (
    <div className="bg-[#FFF5E6] font-[system-ui] text-[#111827] antialiased min-h-screen">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#FFF5E6]/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 text-base font-semibold cursor-pointer" onClick={() => navigate('/')}>
            <span className="grid h-6 w-6 place-items-center rounded-md bg-[#FAD4C0] text-xs font-bold text-[#111827]">
              IS
            </span>
            Ingeniería de Software
          </div>
          <div className="hidden sm:flex items-center gap-1">
            {topics.map((t) => (
              <button
                key={t.slug}
                onClick={() => navigate(`/unidad/${t.slug}`)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  slug === t.slug ? 'bg-[#111827] text-white' : 'text-black/60 hover:bg-black/5'
                }`}
              >
                U{t.icon}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-4rem)]">
        {isDetailView && activeTopic ? (
          <ChapterView topic={activeTopic} chapterIndex={idx} />
        ) : topic ? (
          <UnitOverview topic={topic} />
        ) : (
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-2xl text-center mb-10 md:mb-12"
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70">
                <BookOpen size={14} weight="fill" className="text-[#111827]" />
                {topics.length} unidades · {topics.reduce((n, t) => n + t.sections.length, 0)} secciones
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
                Ingeniería y<br />Calidad de Software
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg md:text-xl leading-relaxed text-black/60">
                Página de estudio completa: material de clase, lectura recomendada
                (Sommerville, Pressman y SWEBOK) y ejercicios resueltos, unidad por unidad.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {topics.map((t, i) => (
                <UnitCard key={t.slug} topic={t} index={i} onClick={() => navigate(`/unidad/${t.slug}`)} />
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 text-sm text-black/50 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Ingeniería y Calidad de Software</span>
        </div>
      </footer>
    </div>
  )
}
