import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { BookOpen, ArrowRight, CheckCircle, XCircle } from '@phosphor-icons/react'
import BentoCard from '../components/BentoCard'
import { useAsync } from '../hooks/useAsync'
import { api } from '../api/client'
import type { Topic, ContentBlock, QuizBlock, TrueFalseBlock } from '../types'

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
        <h3 className="text-xl font-bold tracking-tight mt-6 mb-2">{block.content}</h3>
      ) : (
        <h4 className="text-base font-semibold mt-4 mb-2 text-black/80">{block.content}</h4>
      )
    case 'text':
      return <p className="text-sm leading-relaxed text-black/70 my-2">{block.content}</p>
    case 'keypoints':
      return (
        <ul className="space-y-2 my-3">
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
        <div className="my-3 rounded-md border border-black/5 bg-[#FFF5E6]/60 px-4 py-3 text-xs italic text-black/50">
          "{block.content}"
          {block.source && <span className="not-italic ml-2 text-black/40">— {block.source}</span>}
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

function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <BentoCard className="h-full">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="grid h-10 w-10 place-items-center rounded-lg text-sm font-bold text-white"
            style={{ backgroundColor: topic.color }}
          >
            {topic.title.charAt(0)}
          </span>
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.14em] text-black/50">
              {topic.subtitle}
            </p>
          </div>
        </div>
        <h3 className="text-lg font-bold leading-snug">{topic.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-black/60">{topic.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {topic.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-black/60">
              {tag}
            </span>
          ))}
        </div>
      </BentoCard>
    </motion.div>
  )
}

function TopicDetail({ topic }: { topic: Topic }) {
  return (
    <div className="space-y-6">
      {topic.sections.map((section, si) => (
        <section key={si}>
          <h2 className="text-2xl font-bold tracking-tight mb-6">{section.title}</h2>
          <div className="space-y-4">
            {section.blocks.map((block, bi) => (
              <ContentBlockRenderer key={bi} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default function ReadingSummary() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const { data: topics, error, loading, reload } = useAsync<Topic[]>(() => api.topics(), [])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorState error={error.message} onRetry={reload} />
  if (!topics?.length) {
    return <ErrorState error="No se encontraron temas. Ejecuta el seeder." onRetry={reload} />
  }

  const topicGroups = {
    sommerville: topics.filter((t) => t.slug.startsWith('sommerville')),
    pressman: topics.filter((t) => t.slug.startsWith('pressman')),
    other: topics.filter((t) => !t.slug.startsWith('sommerville') && !t.slug.startsWith('pressman')),
  }

  return (
    <div className="bg-[#FFF5E6] font-[system-ui] text-[#111827] antialiased min-h-screen">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#FFF5E6]/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-[#FAD4C0] text-xs font-bold text-[#111827]">
                IS
              </span>
              Ingenieria de Software
            </div>
            <div className="hidden items-center gap-6 text-sm font-medium text-black/60 md:flex">
              <a href="#sommerville" className="transition-colors hover:text-[#111827]">Sommerville</a>
              <a href="#pressman" className="transition-colors hover:text-[#111827]">Pressman</a>
              <a href="#otros" className="transition-colors hover:text-[#111827]">SWEBOK</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        {selectedTopic ? (
          <div>
            <button
              onClick={() => setSelectedTopic(null)}
              className="mb-6 text-sm font-medium text-black/50 hover:text-[#111827] transition-colors"
            >
              &larr; Volver a todos los temas
            </button>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="grid h-12 w-12 place-items-center rounded-lg text-lg font-bold text-white"
                style={{ backgroundColor: selectedTopic.color }}
              >
                {selectedTopic.title.charAt(0)}
              </span>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{selectedTopic.title}</h1>
                <p className="text-sm text-black/50">{selectedTopic.subtitle}</p>
              </div>
            </div>
            <TopicDetail topic={selectedTopic} />
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70">
                <BookOpen size={14} weight="fill" className="text-[#111827]" />
                {topics.length} Temas
              </span>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Fundamentos de
                <br />
                Ingenieria de Software
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-black/60">
                Contenido interactivo basado en Sommerville, Pressman y el guia SWEBOK.
              </p>
            </motion.div>

            <section id="sommerville" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight mb-6">Sommerville</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {topicGroups.sommerville.map((topic, i) => (
                  <div key={topic._id || topic.slug} onClick={() => setSelectedTopic(topic)} className="cursor-pointer">
                    <TopicCard topic={topic} index={i} />
                  </div>
                ))}
              </div>
            </section>

            <section id="pressman" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight mb-6">Pressman</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {topicGroups.pressman.map((topic, i) => (
                  <div key={topic._id || topic.slug} onClick={() => setSelectedTopic(topic)} className="cursor-pointer">
                    <TopicCard topic={topic} index={i} />
                  </div>
                ))}
              </div>
            </section>

            <section id="otros" className="mb-16">
              <h2 className="text-2xl font-bold tracking-tight mb-6">Integracion y SWEBOK</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {topicGroups.other.map((topic, i) => (
                  <div key={topic._id || topic.slug} onClick={() => setSelectedTopic(topic)} className="cursor-pointer">
                    <TopicCard topic={topic} index={i} />
                  </div>
                ))}
              </div>
            </section>
          </>
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
