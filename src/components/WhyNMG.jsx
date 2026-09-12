import { Clock, Bot, GraduationCap, LayoutGrid, PiggyBank, FileX } from 'lucide-react'
import { features } from '../data/testimonials'
import Button from './ui/Button'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'

const icons = { Clock, Bot, GraduationCap, LayoutGrid, PiggyBank, FileX }

export default function WhyNMG() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          title="Every specialist, engineered for output"
          sub="AI-trained, fully briefed, and producing results before your first invoice arrives."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = icons[f.icon] ?? Clock
            return (
              <Card
                key={f.title}
                delay={(i % 3) * 100}
                className="bg-ink-panel border border-white/10 hover:border-gold/60 rounded-sm p-8"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-medium uppercase tracking-wide mb-3">
                  {f.title}
                </h3>
                <p className="text-cream/60 leading-relaxed text-[15px]">{f.desc}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outlineGold"
            icon
            onClick={() =>
              document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            See our packages
          </Button>
        </div>
      </div>
    </section>
  )
}