import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'

const sectionLinks = [
  { label: 'Atlas', section: 'atlas' },
  { label: 'Approach', section: 'approach' },
  { label: 'Case Studies', section: 'cases' },
  { label: 'Intelligence', section: 'intelligence' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const goSection = (id) => {
    setOpen(false)
    if (pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}nmg-logo.svg`}
            alt="Northwest Media Group"
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {sectionLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => goSection(l.section)}
              className="text-[13px] font-display font-medium uppercase tracking-[0.2em] transition-colors text-cream/70 hover:text-gold"
            >
              {l.label}
            </button>
          ))}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[13px] font-display font-medium uppercase tracking-[0.2em] transition-colors ${
                isActive ? 'text-gold' : 'text-cream/70 hover:text-gold'
              }`
            }
          >
            About
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" icon>
            Book a Call
          </Button>
        </div>

        <button
          className="lg:hidden text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-gold/20 px-6 py-6 space-y-4">
          {sectionLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => goSection(l.section)}
              className="block text-[14px] font-display font-medium uppercase tracking-[0.2em] text-cream/85"
            >
              {l.label}
            </button>
          ))}
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="block text-[14px] font-display font-medium uppercase tracking-[0.2em] text-cream/85"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-[14px] font-display font-medium uppercase tracking-[0.2em] text-gold"
          >
            Book a Call
          </NavLink>
        </div>
      )}
    </header>
  )
}