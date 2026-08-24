import { motion, useReducedMotion } from 'motion/react'
import { BookOpen, ListChecks, GitBranch, Books, Lightbulb, Target, ArrowRight } from '@phosphor-icons/react'
import BentoCard from '../components/BentoCard'
import { useAsync } from '../hooks/useAsync'
import { api } from '../api/client'
import type { Reading } from '../types'

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

function SommervilleSection({ reading }: { reading: Reading }) {
  return (
    <section id="sommerville" className="border-y border-black/10 bg-white/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
            {reading.author} · {reading.edition}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {reading.bookTitle}
          </h2>
          <p className="mt-4 text-black/60">
            {reading.bookMeta?.desc}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {reading.chapters.map((ch, i) => (
            <BentoCard key={ch.num} delay={i * 0.06}>
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#FAD4C0] text-sm font-bold">
                  {ch.num}
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-black/50">
                  Capítulo
                </span>
              </div>
              <h3 className="text-lg font-bold leading-snug">{ch.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60">{ch.what}</p>
              <ul className="mt-4 space-y-2">
                {ch.keyPoints.map((pt) => (
                  <li key={pt.text} className="flex items-start gap-2 text-sm text-black/70">
                    <ArrowRight size={14} className="mt-0.5 shrink-0 text-[#FAD4C0]" />
                    {pt.text}
                  </li>
                ))}
              </ul>
              {ch.quote && (
                <div className="mt-5 rounded-md border border-black/5 bg-[#FFF5E6]/60 px-4 py-3 text-xs italic text-black/50">
                  "{ch.quote}"
                </div>
              )}
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function PressmanSection({ reading, comparison }: { reading: Reading; comparison?: Reading['comparison'] }) {
  const reduce = useReducedMotion()
  return (
    <section id="pressman" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
          {reading.author} · {reading.edition}
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {reading.bookTitle}
        </h2>
        <p className="mt-4 text-black/60">
          {reading.bookMeta?.desc}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {reading.chapters.map((ch, i) => (
          <BentoCard key={ch.num} delay={i * 0.06}>
            <div className="flex items-center gap-3 mb-4">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#80A1C1] text-sm font-bold text-white">
                {ch.num}
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-black/50">
                Capítulo
              </span>
            </div>
            <h3 className="text-lg font-bold leading-snug">{ch.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">{ch.what}</p>
            <ul className="mt-4 space-y-2">
              {ch.keyPoints.map((pt) => (
                <li key={pt.text} className="flex items-start gap-2 text-sm text-black/70">
                  <ArrowRight size={14} className="mt-0.5 shrink-0 text-[#80A1C1]" />
                  {pt.text}
                </li>
              ))}
            </ul>
            {ch.quote && (
              <div className="mt-5 rounded-md border border-black/5 bg-[#F0F4F8]/60 px-4 py-3 text-xs italic text-black/50">
                "{ch.quote}"
              </div>
            )}
          </BentoCard>
        ))}
      </div>

      {comparison && (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <BentoCard className="bg-[#111827] text-white">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/50">Comparación</p>
            <p className="mt-3 text-2xl font-bold tracking-tight">{comparison.title}</p>
            <div className="mt-6 space-y-3">
              {comparison.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  <span className="h-2 w-2 rounded-full bg-[#FAD4C0]" />
                  {item}
                </motion.div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="bg-[#FAD4C0]">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] opacity-60">Concepto Clave</p>
            <p className="mt-3 text-2xl font-bold tracking-tight">Ciclo de Vida del Software</p>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Tanto Sommerville como Pressman coinciden en que el ciclo de vida del software
              comprende: especificación, desarrollo, validación y evolución. La diferencia
              radica en cómo cada autor estructura las actividades dentro de cada fase.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Especificación', 'Desarrollo', 'Validación', 'Evolución'].map((phase) => (
                <span key={phase} className="rounded-md bg-[#111827] px-3 py-1 text-xs font-semibold text-white">
                  {phase}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>
      )}
    </section>
  )
}

function SwebokSection({ reading }: { reading: Reading }) {
  const reduce = useReducedMotion()
  return (
    <section id="swebok" className="border-y border-black/10 bg-white/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
            {reading.author} · {reading.edition}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {reading.bookTitle}
          </h2>
          <p className="mt-4 text-black/60">
            {reading.bookMeta?.desc}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <BentoCard className="bg-[#111827] text-white">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/50">Propósito</p>
            <p className="mt-3 text-xl font-bold tracking-tight">Establecer estándares</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              El SWEBOK busca caracterizar los contenidos de las disciplinas de la
              ingeniería de software, promover una visión común del campo, y clarificar
              el lugar de la ingeniería de software respecto a otras disciplinas.
            </p>
          </BentoCard>

          <BentoCard className="bg-[#80A1C1]">
            <Books size={28} className="text-[#111827]" />
            <p className="mt-6 text-sm font-medium text-black/60">Áreas de Conocimiento</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">15</p>
            <p className="mt-4 text-sm leading-relaxed text-black/70">
              Divididas en 9 áreas de ingeniería y 6 áreas de gestión/fundamentos.
            </p>
          </BentoCard>

          <BentoCard className="bg-[#FAD4C0]">
            <ListChecks size={28} className="text-[#111827]" />
            <p className="mt-6 text-sm font-medium text-black/60">Disciplinas</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">5</p>
            <p className="mt-4 text-sm leading-relaxed text-black/70">
              Computing foundations, mathematical foundations, engineering foundations,
              professional practice y una novena área de soporte.
            </p>
          </BentoCard>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {reading.swebokAreas.map((ka, i) => (
            <BentoCard key={ka.area} className="bg-white/90" delay={i * 0.04}>
              <div className="flex items-center gap-3 mb-3">
                <GitBranch size={16} className="text-[#80A1C1]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-black/50">
                  {ka.area}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-black/70">{ka.desc}</p>
            </BentoCard>
          ))}
        </div>

        {reading.comparison && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <BentoCard>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-black/50">Relación con los Libros</p>
              <p className="mt-3 text-xl font-bold tracking-tight">{reading.comparison.title}</p>
              <div className="mt-4 space-y-3">
                {reading.comparison.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                    className="rounded-md border border-black/5 bg-white/70 px-4 py-3"
                  >
                    <p className="text-xs text-black/60">{item}</p>
                  </motion.div>
                ))}
              </div>
            </BentoCard>

            <BentoCard className="bg-[#111827] text-white">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/50">Resumen Visual</p>
              <p className="mt-3 text-xl font-bold tracking-tight">Las 3 Dimensiones</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'Procesos', desc: 'Cómo se construye', color: 'bg-[#FAD4C0]' },
                  { label: 'Conocimiento', desc: 'Qué se debe saber', color: 'bg-[#80A1C1]' },
                  { label: 'Calidad', desc: 'Qué tan bien se hace', color: 'bg-[#16A34A]' },
                ].map((dim) => (
                  <div key={dim.label} className="rounded-md border border-white/10 bg-white/5 p-3 text-center">
                    <div className={`mx-auto mb-2 h-8 w-8 rounded-md ${dim.color}`} />
                    <p className="text-xs font-bold">{dim.label}</p>
                    <p className="mt-1 text-[10px] text-white/50">{dim.desc}</p>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        )}
      </div>
    </section>
  )
}

export default function ReadingSummary() {
  const reduce = useReducedMotion()
  const { data: readings, error, loading, reload } = useAsync<Reading[]>(() => api.readings(), [])

  const sommerville = readings?.find((r) => r.slug === 'sommerville')
  const pressman = readings?.find((r) => r.slug === 'pressman')
  const swebok = readings?.find((r) => r.slug === 'swebok')

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorState error={error.message} onRetry={reload} />
  if (!sommerville || !pressman || !swebok) {
    return <ErrorState error="No se encontraron datos de lecturas. Ejecuta el seeder." onRetry={reload} />
  }

  return (
    <div className="bg-[#FFF5E6] font-[system-ui] text-[#111827] antialiased min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#FFF5E6]/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-[#FAD4C0] text-xs font-bold text-[#111827]">
                R
              </span>
              Lecturas
            </div>
            <div className="hidden items-center gap-6 text-sm font-medium text-black/60 md:flex">
              <a href="#sommerville" className="transition-colors hover:text-[#111827]">Sommerville</a>
              <a href="#pressman" className="transition-colors hover:text-[#111827]">Pressman</a>
              <a href="#swebok" className="transition-colors hover:text-[#111827]">SWEBOK</a>
            </div>
          </div>
          <a
            href="#sommerville"
            className="rounded-lg bg-[#111827] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Comenzar
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70">
              <BookOpen size={14} weight="fill" className="text-[#111827]" />
              Resumen de Lecturas Semanales
            </span>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Fundamentos de
              <br />
              Ingeniería de Software
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-black/60">
              Resumen conciso de los capítulos esenciales de Sommerville, Pressman y el
              guía SWEBOK para la semana de estudio.
            </p>
          </motion.div>

          {/* Hero grid bento */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-4">
            <BentoCard className="sm:col-span-2">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-black/50">Fuentes</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">3 Libros Base</p>
              <div className="mt-6 space-y-3">
                {[
                  { name: 'Sommerville', cap: 'Cap. 1–3', color: 'bg-[#FAD4C0]' },
                  { name: 'Pressman', cap: 'Cap. 1–3', color: 'bg-[#80A1C1]' },
                  { name: 'SWEBOK v3', cap: 'Guía Completa', color: 'bg-[#111827] text-white' },
                ].map((src, i) => (
                  <motion.div
                    key={src.name}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                    className="flex items-center gap-3 rounded-md border border-black/5 bg-white/70 px-4 py-3 text-sm"
                  >
                    <span className={`h-2 w-2 rounded-full ${src.color.split(' ')[0]}`} />
                    <span className="font-medium">{src.name}</span>
                    <span className="ml-auto font-mono text-xs text-black/40">{src.cap}</span>
                  </motion.div>
                ))}
              </div>
            </BentoCard>

            <BentoCard className="bg-[#80A1C1]">
              <Lightbulb size={28} className="text-[#111827]" />
              <p className="mt-6 text-sm font-medium text-black/60">Capítulos</p>
              <p className="mt-1 text-3xl font-bold tracking-tight">7</p>
              <p className="mt-6 text-sm leading-relaxed text-black/70">
                Sommerville 1–3, Pressman 1–3 y SWEBOK
              </p>
            </BentoCard>

            <BentoCard className="bg-[#FAD4C0]">
              <Target size={28} className="text-[#111827]" />
              <p className="mt-6 text-sm font-medium text-black/60">Objetivo</p>
              <p className="mt-1 text-3xl font-bold tracking-tight">1 Semana</p>
              <p className="mt-6 text-sm leading-relaxed text-black/70">
                Dominar los fundamentos teóricos y prácticos de la ingeniería de software.
              </p>
            </BentoCard>
          </div>
        </section>

        <SommervilleSection reading={sommerville} />
        <PressmanSection reading={pressman} comparison={sommerville.comparison || pressman.comparison} />
        <SwebokSection reading={swebok} />

        {/* CTA / Closing */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20">
          <BentoCard className="bg-[#111827] px-8 py-16 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Lectura completada.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Estos fundamentos son la base para todo lo que viene en el curso.
              La práctica constante y la relectura son clave para la retención.
            </p>
            <a
              href="#sommerville"
              className="mt-8 inline-block rounded-lg bg-[#FAD4C0] px-8 py-3.5 text-sm font-semibold text-[#111827] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Volver al inicio
            </a>
          </BentoCard>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-black/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Ingeniería y Calidad de Software · Resumen de Lecturas</span>
          <div className="flex items-center gap-6">
            <a href="#sommerville" className="hover:text-[#111827]">Sommerville</a>
            <a href="#pressman" className="hover:text-[#111827]">Pressman</a>
            <a href="#swebok" className="hover:text-[#111827]">SWEBOK</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
