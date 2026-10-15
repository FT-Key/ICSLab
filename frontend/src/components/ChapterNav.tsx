import { CheckCircle, CaretLeft, CaretRight, Circle } from '@phosphor-icons/react'

interface ChapterNavProps {
  total: number
  current: number
  completed: Set<number>
  onSelect: (index: number) => void
  onToggleComplete: (index: number) => void
}

export default function ChapterNav({ total, current, completed, onSelect, onToggleComplete }: ChapterNavProps) {
  const progress = total > 0 ? Math.round(((current + 1) / total) * 100) : 0
  return (
    <div className="sticky top-16 z-30 border-b border-black/10 bg-[#FFF5E6]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-6 py-3 overflow-x-auto">
        {/* Prev */}
        <button
          onClick={() => current > 0 && onSelect(current - 1)}
          disabled={current === 0}
          aria-label={`Ir a la sección anterior (actual: sección ${current + 1} de ${total})`}
          className="flex items-center gap-1 rounded-md border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black/70 transition-all hover:bg-black/5 disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
        >
          <CaretLeft size={14} />
          Anterior
        </button>

        {/* Chapter pills */}
        <div className="flex items-center gap-1.5 mx-auto" role="group" aria-label={`Secciones: estás en la ${current + 1} de ${total}`}>
          {Array.from({ length: total }, (_, i) => {
            const isDone = completed.has(i)
            const isCurrent = i === current
            return (
              <button
                key={i}
                onClick={() => onSelect(i)}
                aria-label={`Ir a la sección ${i + 1} de ${total}${isDone ? ' (completada)' : ''}`}
                aria-current={isCurrent ? 'step' : undefined}
                className={`relative flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all shrink-0 ${
                  isCurrent
                    ? 'bg-[#111827] text-white scale-110 shadow-md'
                    : isDone
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-white border border-black/15 text-black/50 hover:border-black/30 hover:text-black/70'
                }`}
                title={`Sección ${i + 1} de ${total}${isDone ? ' ✓' : ''}`}
              >
                {isDone && !isCurrent ? (
                  <CheckCircle size={16} weight="fill" />
                ) : (
                  i + 1
                )}
              </button>
            )
          })}
        </div>

        {/* Next */}
        <button
          onClick={() => current < total - 1 && onSelect(current + 1)}
          disabled={current === total - 1}
          aria-label={`Ir a la sección siguiente (actual: sección ${current + 1} de ${total})`}
          className="flex items-center gap-1 rounded-md border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black/70 transition-all hover:bg-black/5 disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
        >
          Siguiente
          <CaretRight size={14} />
        </button>

        {/* Complete toggle */}
        <button
          onClick={() => onToggleComplete(current)}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all shrink-0 ml-2 ${
            completed.has(current)
              ? 'bg-green-500 text-white'
              : 'border border-black/15 bg-white text-black/60 hover:bg-black/5'
          }`}
        >
          {completed.has(current) ? (
            <>
              <CheckCircle size={14} weight="fill" />
              Completado
            </>
          ) : (
            <>
              <Circle size={14} />
              Marcar completo
            </>
          )}
        </button>
      </div>
      {/* Barra de progreso: refuerzo visual de en qué sección estás */}
      <div
        className="h-1 w-full bg-black/5"
        role="progressbar"
        aria-valuenow={current + 1}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Progreso: sección ${current + 1} de ${total}`}
      >
        <div
          className="h-full bg-[#111827] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
