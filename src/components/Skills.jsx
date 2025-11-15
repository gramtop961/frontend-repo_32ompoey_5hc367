import { motion } from 'framer-motion'
import Section from './Section'

const groups = [
  {
    title: 'AIML & Python',
    items: [
      { label: 'PyTorch', level: 85 },
      { label: 'TensorFlow', level: 75 },
      { label: 'NLP/LLMs', level: 90 },
      { label: 'Computer Vision', level: 80 },
    ],
  },
  {
    title: 'Flutter & Firebase',
    items: [
      { label: 'Flutter', level: 80 },
      { label: 'Firebase', level: 70 },
      { label: 'App Design', level: 85 },
    ],
  },
  {
    title: 'UI/UX & Graphic Design',
    items: [
      { label: 'Figma', level: 90 },
      { label: 'Prototyping', level: 85 },
      { label: 'Motion Design', level: 70 },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { label: 'Docker', level: 65 },
      { label: 'Git/GitHub', level: 85 },
      { label: 'CI/CD', level: 60 },
    ],
  },
]

export default function Skills() {
  return (
    <Section id="skills" subtitle="Capabilities" title="Skills & Tools">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((g) => (
          <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative rounded-2xl p-6 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20">
            <h3 className="font-semibold text-white mb-4">{g.title}</h3>
            <div className="space-y-4">
              {g.items.map((i) => (
                <div key={i.label}>
                  <div className="flex items-center justify-between text-sm text-slate-200/80 mb-2">
                    <span>{i.label}</span>
                    <span>{i.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${i.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-[#9b5eff] to-[#4b91f1]" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
