import Button from './ui/Button'
import SectionLabel from './ui/SectionLabel'
import Card from './ui/Card'

const steps = [
  {
    num: '01',
    title: 'Tell Us What You Need',
    desc: 'Jump on a quick call or fill out our form. We identify your biggest need and match you with the right specialist from our vetted talent pool.',
  },
  {
    num: '02',
    title: 'Choose Your Package',
    desc: 'We present the best plan for your goals within 48 hours. You review, you choose. No pressure, no long-term commitment required.',
  },
  {
    num: '03',
    title: 'They Start Producing',
    desc: 'We plug directly into your stack: Meta Business Suite, Shopify, whatever you run on. Content calendars live. Day one is productive, not orientation.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-dark-900 text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <SectionLabel light>The Right Hire Will Change Your Business</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-balance">
            How It <span className="text-teal-nmg">Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <Card key={s.num} delay={i * 120} className="relative">
              <div className="text-[64px] font-black text-teal-nmg/25 leading-none mb-6">
                {s.num}
              </div>
              <h3 className="text-2xl font-extrabold mb-3">{s.title}</h3>
              <p className="text-white/70 leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="primary" to="/contact" icon>
            Get My Free Team Audit
          </Button>
        </div>
      </div>
    </section>
  )
}