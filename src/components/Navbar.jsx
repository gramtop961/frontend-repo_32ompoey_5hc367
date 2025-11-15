import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[86%] transition-all ${
      scrolled ? 'drop-shadow-xl' : ''
    }`}>
      <div className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl px-4 py-2 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#9b5eff] to-[#4b91f1] grid place-items-center shadow-[0_0_30px_rgba(155,94,255,0.6)]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-100">Amit Keshari</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-3 py-2 rounded-xl text-sm text-slate-700/90 dark:text-slate-200/90 hover:text-white hover:bg-white/10 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={() => setDark(v => !v)} className="h-9 w-9 rounded-xl grid place-items-center text-slate-700 dark:text-slate-200 hover:bg-white/10">
            {dark ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
          </button>
          <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="md:hidden h-9 w-9 rounded-xl grid place-items-center text-slate-700 dark:text-slate-200 hover:bg-white/10">
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-2 backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl p-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-xl text-sm text-slate-700/90 dark:text-slate-200/90 hover:text-white hover:bg-white/10">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
