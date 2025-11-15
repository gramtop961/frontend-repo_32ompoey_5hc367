import { motion } from 'framer-motion'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" subtitle="Introduction" title="About Me">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="relative rounded-[24px] overflow-hidden border border-white/20 backdrop-blur-xl bg-white/5 p-2">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" alt="Amit Keshari" className="rounded-[20px] object-cover h-80 w-full" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-[20px]" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-slate-200/90 leading-relaxed text-lg">
            I’m Amit Keshari — an AIML engineering student, freelancer, and aspiring founder. I build agentic systems, multimodal AI tools, and mobile experiences that feel magical. Passionate about research-backed design, MLOps, and human-centered interfaces.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Projects', value: '25+' },
              { label: 'Hackathons', value: '10+' },
              { label: 'Clients', value: '12+' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-4 bg-white/10 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs tracking-wider text-slate-300/80">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
