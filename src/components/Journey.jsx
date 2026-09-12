import { HelpCircle, Search, Star, Crown, Globe } from 'lucide-react'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'
import { images } from '../data/images'

const stages = [
  { icon: HelpCircle, label: 'Unknown' },
  { icon: Search, label: 'Discovered' },
  { icon: Star, label: 'Popular' },
  { icon: Crown, label: 'Local Icon' },
  { icon: Globe, label: 'Regional Brand' },
]

export default function Journey() {
  return (
    <section className="bg-black py-20 md:py-28 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          number="02"
          title="The Journey"
          sub="A clear path from where you are to where you want to be. We don't guess. We build the path."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stages.map((s, i) => (
            <Card
              key={s.label}
              delay={i * 100}
              className="relative bg-ink-panel border border-white/10 hover:border-gold/60 rounded-sm p-6 text-center overflow-hidden"
            >
              <span className="absolute top-3 left-4 font-display text-cream/20 text-sm tracking-widest">
                0{i + 1}
              </span>
              <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="font-display uppercase tracking-[0.15em] text-[13px] text-cream/90">
                {s.label}
              </div>
              {i < stages.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gold/50" />
              )}
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-14 relative h-56 md:h-72 overflow-hidden">
        <img
          src={images.journeySkyline}
          alt="City at night"
          className="w-full h-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
      </div>
    </section>
  )
}