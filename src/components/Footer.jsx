import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

const nav = [
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 border-b border-white/10 pb-12">
          <div className="max-w-sm">
            <img src={`${import.meta.env.BASE_URL}nmg-logo.svg`} alt="Northwest Media Group" className="h-11 w-auto mb-5" />
            <p className="text-white/60 text-[15px] leading-relaxed">
              Your complete social media and marketing partner. AI-trained, college-educated
              specialists producing results from day one.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.22em] text-teal-nmg mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-white/75 hover:text-teal-nmg transition-colors text-[15px]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.22em] text-teal-nmg mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-teal-nmg transition-colors duration-300 flex items-center justify-center"
                >
                  <s.icon className="w-5 h-5 text-white hover:text-dark-900 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-[13px]">©NMG 2026. All rights reserved.</p>
          <p className="text-white/40 text-[13px]">Marketing done for you.</p>
        </div>
      </div>
    </footer>
  )
}