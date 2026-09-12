import { Clock, Bot, GraduationCap, LayoutGrid, PiggyBank, FileX } from 'lucide-react'
import { features } from '../data/testimonials'
import Button from './ui/Button'
import Card from './ui/Card'
import SectionLabel from './ui/SectionLabel'

const icons = { Clock, Bot, GraduationCap, LayoutGrid, PiggyBank, FileX }

export default function WhyNMG() {
  return (
    <section className="bg-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <SectionLabel>Why NMG Is Different</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-balance">
            Every NMG Specialist Is{' '}
            <span className="text-teal-dark">AI-Trained</span>, Fully Briefed, and Producing
            Results Before Your First Invoice Arrives.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = icons[f.icon] ?? Clock
            return (
              <Card key={f.title} delay={(i % 3) * 100} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="w-14 h-14 rounded-xl bg-teal-nmg/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-teal-dark" />
                </div>
                <h3 className="text-xl font-extrabold mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="primary"
            icon
            onClick={() =>
              document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            See Our Packages
          </Button>
        </div>
      </div>
    </section>
  )
}