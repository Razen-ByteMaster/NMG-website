import Button from './ui/Button'
import SectionHead from './ui/SectionHead'
import Card from './ui/Card'

const steps = [
  {
    num: '01',
    title: 'Tell Us What You Need',
    desc: 'Jump on a quick call or fill out our form. We identify your biggest need and match you with the right specialists.',
  },
  {
    num: '02',
    title: 'Choose Your Package',
    desc: 'We present the best plan for your goals within 48 hours. You review, you choose. No pressure, no long-term lock-in.',
  },
  {
    num: '03',
    title: 'They Start Producing',
    desc: 'We plug directly into your stack. Content calendars live. Day one is productive, not orientation.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-black py-20 md:py-28 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          title="The right partner changes everything"
          sub="How it works — from first call to first result."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Card key={s.num} delay={i * 120} className="relative">
              <div className="font-display text-[64px] font-semibold text-gold/25 leading-none mb-6">
                {s.num}
              </div>
              <h3 className="font-display text-2xl font-medium uppercase tracking-wide mb-3">
                {s.title}
              </h3>
              <p className="text-cream/60 leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="primary" to="/contact" icon>
            Get my free audit
          </Button>
        </div>
      </div>
    </section>
  )
}