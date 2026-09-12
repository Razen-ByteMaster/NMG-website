import { Target, HeartHandshake, Rocket, ShieldCheck } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionHead from '../components/ui/SectionHead'

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
      <section className="bg-ink text-cream py-20 md:py-28 overflow-hidden relative">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gold/10 blur-[130px] -top-[200px] right-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[13px] font-bold tracking-[0.3em] text-gold/70 mb-3">ABOUT US</div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold uppercase tracking-wide leading-[1.05] max-w-3xl animate-fadeUp">
            The partner behind <span className="text-gold">growing brands</span>
          </h1>
          <p
            className="mt-6 text-lg text-cream/60 max-w-2xl leading-relaxed animate-fadeUp"
            style={{ animationDelay: '150ms' }}
          >
            Northwest Media Group (NMG) was founded on a simple belief: clinics and businesses
            shouldn’t overpay for marketing that actually works. From Alexandria to the world, we
            build specialist teams that operate in your time zone and produce results before your
            first invoice arrives.
          </p>
        </div>
      </section>

      <section className="bg-black py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHead
            title="What we stand for"
            sub="Deliver a full marketing team’s output at less than the cost of a single hire."
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <Card
                key={v.title}
                delay={(i % 2) * 100}
                className="bg-ink-panel rounded-sm p-8 border border-white/10 hover:border-gold/60"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <v.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-medium uppercase tracking-wide mb-3">
                  {v.title}
                </h3>
                <p className="text-cream/60 leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-8">
            Ready to grow with us?
          </h2>
          <Button to="/contact" variant="primary" icon>
            Book a free audit
          </Button>
        </div>
      </section>
    </>
  )
}