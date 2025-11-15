import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Section({ id, title, subtitle, children, glow = true }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0.1 1', '0.8 1'] })
  const y = useTransform(scrollYProgress, [0, 1], [20, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id={id} ref={ref} className="relative py-28 md:py-36">
      {glow && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-10 h-40 w-40 rounded-full bg-[#9b5eff]/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-40 w-40 rounded-full bg-[#4b91f1]/20 blur-3xl" />
        </div>
      )}
      <motion.div style={{ y, opacity }} className="container mx-auto px-6 md:px-10">
        {(title || subtitle) && (
          <div className="mb-10">
            {subtitle && <p className="text-sm uppercase tracking-[0.2em] text-[#9b5eff]">{subtitle}</p>}
            {title && <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{title}</h2>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  )
}
