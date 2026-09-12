import Button from './ui/Button'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'
import RadarChart from './RadarChart'

export default function AuditTeaser() {
  return (
    <section id="audit" className="bg-ink py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHead
            number="01"
            title="Where are you today?"
            sub="We analyse every part of your business to identify hidden opportunities and growth gaps — visibility, brand, content, advertising, loyalty and technology."
          />
          <Card className="inline-block">
            <Button to="/contact" variant="primary" icon>
              Get your free audit
            </Button>
          </Card>
        </div>
        <Card className="bg-ink-panel/60 border border-gold/15 rounded-lg p-6 md:p-8">
          <RadarChart />
          <p className="text-center text-[12px] uppercase tracking-[0.25em] text-cream/40 mt-2 font-display">
            Sample growth diagnostic
          </p>
        </Card>
      </div>
    </section>
  )
}