import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={`${import.meta.env.BASE_URL}nmg-logo.svg`} alt="Northwest Media Group" className="h-11 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `text-[14px] font-bold uppercase tracking-wide transition-colors ${
                  isActive ? 'text-teal-nmg' : 'text-white/80 hover:text-teal-nmg'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" icon>
            Book a Free Audit
          </Button>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-dark-900 border-t border-white/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-[15px] font-bold uppercase ${
                  isActive ? 'text-teal-nmg' : 'text-white/85'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button to="/contact" className="w-full justify-center mt-2">
            Book a Free Audit
          </Button>
        </div>
      )}
    </header>
  )
}