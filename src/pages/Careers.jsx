import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

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
      <section className="bg-dark-900 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel light>Careers</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl">
            Build Your Career With <span className="text-teal-nmg">NMG</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
            Join a fast-moving team of specialists delivering real results for businesses across the
            US, Canada and beyond.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <SectionLabel>Open Positions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black">We’re hiring specialists.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((r, i) => (
              <Card key={r.title} delay={(i % 2) * 100} className="group bg-light rounded-2xl p-8 border border-slate-100 hover:border-teal-nmg shadow-card">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-teal-dark" />
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500">
                    <MapPin className="w-3.5 h-3.5" /> {r.dept}
                  </div>
                </div>
                <h3 className="text-xl font-extrabold mb-1">{r.title}</h3>
                <div className="flex items-center gap-2 text-[13px] font-bold text-teal-dark mb-3">
                  <Clock className="w-3.5 h-3.5" /> {r.type}
                </div>
                <p className="text-slate-600 leading-relaxed mb-5">{r.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[14px] font-extrabold text-dark-900 hover:text-teal-dark transition-colors"
                >
                  Apply now <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>

          <Card className="bg-dark-900 text-white rounded-2xl p-10 mt-12">
            <h2 className="text-2xl md:text-3xl font-black mb-6">Why specialists love NMG</h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/85">
                  <span className="w-2 h-2 rounded-full bg-teal-nmg shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="primary" to="/contact" icon>
                Apply Now
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}