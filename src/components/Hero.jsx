import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/40 to-[#0d0d0d]" />

      <div className="relative h-full container mx-auto px-6 md:px-10 flex flex-col items-start justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_40px_rgba(155,94,255,0.35)]">
          Hi, I’m Amit —
          <br />
          AIML Innovator, Designer & Builder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-slate-200/90">
          I craft intelligent products that blend AI, design, and engineering. Exploring multimodal AI, agentic systems, and delightful user experiences.
        </motion.p>

        <div className="mt-10 flex gap-4">
          <MagneticButton href="#projects" primary>Explore Projects</MagneticButton>
          <MagneticButton href="#contact">Let’s Collaborate</MagneticButton>
        </div>
      </div>
    </section>
  )
}

function MagneticButton({ href = '#', children, primary }) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl overflow-hidden transition-all duration-300 ${
        primary
          ? 'text-white bg-gradient-to-r from-[#9b5eff] to-[#4b91f1] shadow-[0_10px_40px_rgba(75,145,241,0.35)]'
          : 'text-white/90 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15'
      }`}
    >
      <span className="relative z-10 font-semibold">{children}</span>
      <span className="absolute inset-0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </a>
  )
}
