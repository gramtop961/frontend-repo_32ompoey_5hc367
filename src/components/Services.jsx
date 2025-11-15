import { motion } from 'framer-motion'
import Section from './Section'

const services = [
  { title: 'AI/ML Development', desc: 'Modeling, fine-tuning, multimodal pipelines, and agent systems.', lottie: '🤖' },
  { title: 'App Development', desc: 'Flutter apps with Firebase and analytics-driven UX.', lottie: '📱' },
  { title: 'Automation Tools', desc: 'Workflows, bots, data scraping, and integrations.', lottie: '⚙️' },
  { title: 'Graphic Designing', desc: 'Branding, visuals, and motion graphics.', lottie: '🎨' },
  { title: 'Portfolio & Branding', desc: 'Personal websites, portfolios, and identity systems.', lottie: '✨' },
]

export default function Services() {
  return (
    <Section id="services" subtitle="Offerings" title="Services">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group relative p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl">
            <div className="text-3xl">{s.lottie}</div>
            <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
            <p className="mt-1 text-slate-200/80 text-sm">{s.desc}</p>
            <div className="mt-5 inline-flex px-4 py-2 rounded-xl bg-gradient-to-r from-[#9b5eff] to-[#4b91f1] text-white text-sm font-medium">Learn more</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
