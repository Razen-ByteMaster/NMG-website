import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionHead from '../components/ui/SectionHead'

const roles = [
  {
    title: 'Social Media Specialist',
    type: 'Full-time · Remote',
    dept: 'Marketing',
    desc: 'Plan, create and schedule content across Instagram and Facebook for our client portfolio.',
  },
  {
    title: 'Video Editor — Short Form',
    type: 'Full-time · Remote',
    dept: 'Content',
    desc: 'Cut reels, TikToks and Shorts optimized for retention and algorithm growth.',
  },
  {
    title: 'Graphic Designer',
    type: 'Full-time · Remote',
    dept: 'Creative',
    desc: 'Design on-brand posts, stories and campaign creative that stop the scroll.',
  },
  {
    title: 'Account Manager',
    type: 'Full-time · Remote',
    dept: 'Client Success',
    desc: 'Own client relationships, monthly reporting and growth strategy delivery.',
  },
]

const perks = [
  'Remote-first work culture',
  'AI tools & training budget',
  'Clear growth path',
  'Work with international clients',
  'Monthly performance bonuses',
]

export default function Careers() {
  return (
    <>
      <section className="bg-ink text-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[13px] font-bold tracking-[0.3em] text-gold/70 mb-3">CAREERS</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-wide leading-tight max-w-3xl">
            Build your career with <span className="text-gold">NMG</span>
          </h1>
          <p className="mt-6 text-lg text-cream/60 max-w-2xl leading-relaxed">
            Join a fast-moving team of specialists delivering real results for clinics and
            businesses across the region and beyond.
          </p>
        </div>
      </section>

      <section className="bg-black py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead title="Open positions" sub="We’re hiring specialists." />

          <div className="grid md:grid-cols-2 gap-5">
            {roles.map((r, i) => (
              <Card
                key={r.title}
                delay={(i % 2) * 100}
                className="group bg-ink-panel rounded-sm p-8 border border-white/10 hover:border-gold/60"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-bold text-cream/40">
                    <MapPin className="w-3.5 h-3.5" /> {r.dept}
                  </div>
                </div>
                <h3 className="font-display text-xl font-medium uppercase tracking-wide mb-1">
                  {r.title}
                </h3>
                <div className="flex items-center gap-2 text-[13px] font-bold text-gold mb-3">
                  <Clock className="w-3.5 h-3.5" /> {r.type}
                </div>
                <p className="text-cream/60 leading-relaxed mb-5">{r.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[14px] font-display font-medium uppercase tracking-[0.15em] text-cream hover:text-gold transition-colors"
                >
                  Apply now <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>

          <Card className="bg-ink-panel border border-gold/25 rounded-sm p-10 mt-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold uppercase tracking-wide mb-6">
              Why specialists love NMG
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-cream/75">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="primary" to="/contact" icon>
                Apply now
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}