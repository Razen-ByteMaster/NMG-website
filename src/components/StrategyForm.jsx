import { useState } from 'react'
import { BadgeCheck, Compass, FileCheck, TrendingUp, Send } from 'lucide-react'
import Button from './ui/Button'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'

const badges = [
  { icon: FileCheck, label: 'Free Growth Audit' },
  { icon: Compass, label: 'Tailored Strategy' },
  { icon: BadgeCheck, label: 'No Obligation' },
  { icon: TrendingUp, label: 'Results Driven' },
]

export default function StrategyForm() {
  const [sent, setSent] = useState(false)

  return (
    <section id="strategy" className="bg-cream text-ink py-20 md:py-28 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHead number="08" title="Where do you want to go?" align="center" />

        {sent ? (
          <Card className="bg-white rounded-sm p-12 text-center shadow-card">
            <Send className="w-10 h-10 text-gold-dark mx-auto mb-5" />
            <h3 className="font-display text-3xl font-semibold uppercase">Request received</h3>
            <p className="text-ink/60 mt-3 max-w-md mx-auto">
              Our strategists will contact you within 24 hours to schedule your session.
            </p>
          </Card>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              required
              placeholder="Your Business Name"
              className="flex-1 bg-white border border-ink/15 rounded-sm px-5 py-4 outline-none focus:border-gold-dark focus:ring-2 focus:ring-gold/30 transition-all text-[15px] placeholder:text-ink/35"
            />
            <Button type="submit" variant="primary" icon>
              Book Strategy Session
            </Button>
          </form>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-ink/60"
            >
              <b.icon className="w-4 h-4 text-gold-dark" />
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}