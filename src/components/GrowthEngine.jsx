import { Camera, Eye, Flame, Users, BarChart3, Rocket, ChevronRight } from 'lucide-react'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'

const steps = [
  { icon: Camera, label: 'Content' },
  { icon: Eye, label: 'Attention' },
  { icon: Flame, label: 'Demand' },
  { icon: Users, label: 'Customers' },
  { icon: BarChart3, label: 'Revenue' },
  { icon: Rocket, label: 'Growth' },
]

export default function GrowthEngine() {
  return (
    <section id="approach" className="bg-ink py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          number="03"
          title="The NMG Growth Engine"
          sub="Our proven system turns attention into revenue and revenue into long-term growth. This is not theory. This is a system."
        />

        <div className="flex flex-col md:flex-row items-stretch gap-3">
          {steps.map((s, i) => (
            <div key={s.label} className="flex-1 flex flex-col md:flex-row items-center gap-3">
              <Card
                delay={i * 90}
                className="flex-1 w-full bg-ink-panel border border-white/10 hover:border-gold/60 rounded-sm p-6 text-center"
              >
                <s.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="font-display uppercase tracking-[0.15em] text-[13px]">
                  {s.label}
                </div>
              </Card>
              {i < steps.length - 1 && (
                <ChevronRight className="w-5 h-5 text-gold/60 shrink-0 rotate-90 md:rotate-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}