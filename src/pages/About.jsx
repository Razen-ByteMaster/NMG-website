import { Target, HeartHandshake, Rocket, ShieldCheck } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const values = [
  {
    icon: Target,
    title: 'Results First',
    desc: 'Every strategy is designed around one thing: measurable growth for your business. No vanity metrics, no fluff.',
  },
  {
    icon: HeartHandshake,
    title: 'True Partnership',
    desc: 'We plug into your team like we’re part of it. Transparent reporting, honest advice, and open communication.',
  },
  {
    icon: Rocket,
    title: 'AI-Powered Speed',
    desc: 'AI-trained specialists deliver a full team’s output at a fraction of typical agency costs — from day one.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Risk Start',
    desc: 'Month-to-month plans with a 14-day money-back guarantee. If it’s not working, you walk. Simple as that.',
  },
]

export default function About() {
  return (
    <>
      <section className="bg-dark-900 text-white py-20 md:py-28 overflow-hidden relative">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-teal-nmg/10 blur-[130px] -top-[200px] right-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel light>About Us</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.05] max-w-3xl animate-fadeUp">
            The Marketing Partner Behind{' '}
            <span className="text-teal-nmg">Growing Brands</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed animate-fadeUp" style={{ animationDelay: '150ms' }}>
            Northwest Media Group (NMG) was founded on a simple belief: businesses shouldn’t
            overpay for marketing that actually works. We build AI-trained, college-educated
            specialist teams that operate in your time zone and produce results before your first
            invoice arrives.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Deliver a full marketing team’s output at less than the cost of a single hire.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Card key={v.title} delay={(i % 2) * 100} className="bg-light rounded-2xl p-8 border border-slate-100 hover:border-teal-nmg shadow-card">
                <div className="w-14 h-14 rounded-xl bg-teal-nmg/10 flex items-center justify-center mb-6">
                  <v.icon className="w-7 h-7 text-teal-dark" />
                </div>
                <h3 className="text-xl font-extrabold mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">Ready to grow with us?</h2>
          <Button to="/contact" variant="primary" icon>
            Book a Free Audit
          </Button>
        </div>
      </section>
    </>
  )
}