import { motion } from 'framer-motion'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" subtitle="Let’s talk" title="Contact">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-sm text-slate-200/80 mb-1">Your Name</label>
              <input className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#9b5eff] transition" placeholder="Amit Keshari" />
            </div>
            <div>
              <label className="block text-sm text-slate-200/80 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#9b5eff] transition" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-200/80 mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#9b5eff] transition" placeholder="Tell me about your project..." />
            </div>
            <button className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#9b5eff] to-[#4b91f1] shadow-[0_10px_40px_rgba(75,145,241,0.35)] overflow-hidden group">
              <span className="z-10">Send Message</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"/>
            </button>
          </form>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl">
          <div className="space-y-3 text-slate-200/90">
            <p>Open to freelance, research collaborations, and product building.</p>
            <div className="flex gap-3">
              {['X', 'LinkedIn', 'GitHub', 'Email'].map(s => (
                <a key={s} href="#" className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 transition text-white text-sm">{s}</a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
