import { motion } from 'framer-motion'
import Section from './Section'

const projects = [
  {
    title: 'Agentic Research Assistant',
    tags: ['AI', 'NLP', 'Automation'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    desc: 'Autonomous pipeline that synthesizes reports from web, papers, and notes.'
  },
  {
    title: 'Vision-based Health Monitor',
    tags: ['AI', 'CV', 'Edge'],
    image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWaXNpb24tYmFzZWQlMjBIZWFsdGglMjBNb25pdG9yfGVufDB8MHx8fDE3NjMyMDA0MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Real-time vitals estimation and anomaly detection on-device.'
  },
  {
    title: 'Flutter Finance App',
    tags: ['Flutter', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1200&auto=format&fit=crop',
    desc: 'Beautiful mobile experience with analytics and AI budgeting.'
  },
]

export default function Projects() {
  return (
    <Section id="projects" subtitle="Showcase" title="Selected Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative rounded-2xl overflow-hidden border border-white/20 bg-white/10">
            <div className="relative h-56 overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                {p.tags.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white/90">{t}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-200/80 text-sm">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
