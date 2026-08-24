import { motion, useReducedMotion } from 'motion/react'

function BentoCard({
  className,
  children,
  delay = 0,
}: {
  className?: string
  children: React.ReactNode
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-lg border border-black/5 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${className ?? ''}`}
    >
      {children}
    </motion.div>
  )
}

export default BentoCard
