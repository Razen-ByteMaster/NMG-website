import {
  TrendingUp, Search, Target, Clapperboard, Palette, PenTool, Mail,
  Globe, Megaphone, Users, LayoutDashboard, Briefcase, Image, Smartphone,
} from 'lucide-react'
import { services } from '../data/services'
import Button from './ui/Button'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'

const icons = {
  TrendingUp, Search, Target, Clapperboard, Palette, PenTool, Mail,
  Globe, Megaphone, Users, LayoutDashboard, Briefcase, Image, Smartphone,
}

export default function ServicesGrid() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          title="Capabilities"
          sub="Your biggest marketing challenges. Solved — under one roof."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? TrendingUp
            return (
              <Card
                key={s.title}
                delay={(i % 4) * 80}
                className="group bg-ink-panel rounded-sm p-7 border border-white/10 hover:border-gold/60"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-gold">
                  <Icon className="w-6 h-6 text-gold transition-colors duration-300 group-hover:text-ink" />
                </div>
                <h3 className="font-display font-medium uppercase tracking-wide text-[17px] mb-2">
                  {s.title}
                </h3>
                <p className="text-cream/55 text-[14px] leading-relaxed">{s.desc}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="dark"
            icon
            onClick={() =>
              document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            See what we offer
          </Button>
        </div>
      </div>
    </section>
  )
}