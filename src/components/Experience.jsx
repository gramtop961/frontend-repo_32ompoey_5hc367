import { motion } from 'framer-motion'
import Section from './Section'
import { Trophy, Briefcase, FlaskConical, Code2 } from 'lucide-react'

const items = [
  { title: 'Freelancing', icon: Briefcase, desc: 'Delivered AI prototypes, automation tools, and branded experiences for clients.' },
  { title: 'Hackathons', icon: Trophy, desc: 'Multiple wins and top finishes building impactful AI experiences.' },
  { title: 'GSSOC Contributor', icon: Code2, desc: 'Contributed to open-source, improving features and documentation.' },
  { title: 'Research', icon: FlaskConical, desc: 'Exploring multimodal learning and evaluation methods.' },
]

export default function Experience() {
  return (
    <Section id="experience" subtitle="Journey" title="Experience & Achievements">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 h-full w-[2px] bg-white/10" />
        <div className="space-y-8">
          {items.map((item, idx) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: idx % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`relative md:w-1/2 ${idx % 2 ? 'md:ml-auto' : ''}`}>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#9b5eff] to-[#4b91f1] grid place-items-center shrink-0">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-slate-200/80 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
