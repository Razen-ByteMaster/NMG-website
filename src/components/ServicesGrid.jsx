import {
  TrendingUp, Search, Target, Clapperboard, Palette, PenTool, Mail,
  Globe, Megaphone, Users, LayoutDashboard, Briefcase, Image, Smartphone,
} from 'lucide-react'
import { services } from '../data/services'
import Button from './ui/Button'
import Card from './ui/Card'
import SectionLabel from './ui/SectionLabel'

const icons = {
  TrendingUp, Search, Target, Clapperboard, Palette, PenTool, Mail,
  Globe, Megaphone, Users, LayoutDashboard, Briefcase, Image, Smartphone,
}

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <SectionLabel>Some of What We Do</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-balance">
            Your Biggest Marketing <span className="text-teal-dark">Challenges</span>. Solved.
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Uncover tailored strategies to overcome your most complex business hurdles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? TrendingUp
            return (
              <Card
                key={s.title}
                delay={(i % 4) * 80}
                className="group bg-light rounded-2xl p-7 border border-slate-100 hover:border-teal-nmg"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-teal-nmg">
                  <Icon className="w-6 h-6 text-teal-dark transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="font-extrabold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{s.desc}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="dark" href="#packages" icon>
            See What We Offer
          </Button>
        </div>
      </div>
    </section>
  )
}