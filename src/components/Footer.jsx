export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="absolute inset-x-0 -top-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="container mx-auto px-6 md:px-10 text-center text-slate-300/80 text-sm">
        © {new Date().getFullYear()} Amit Keshari. Crafted with passion.
      </div>
    </footer>
  )
}
