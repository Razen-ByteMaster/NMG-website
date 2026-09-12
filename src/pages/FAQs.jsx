import { useState } from 'react'
import { Plus } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const faqs = [
  {
    q: 'How fast can we start?',
    a: 'We present your plan and matched specialists within 48 hours of your free audit call. Most clients are live with content within one week.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. All packages are month-to-month with a standard 3-month agreement. You can leave after notice — no lock-in, no penalties beyond the stated terms.',
  },
  {
    q: 'What does the 14-day money-back guarantee cover?',
    a: 'If your specialist isn’t the right fit within the first 14 days, you get a full refund. No questions asked.',
  },
  {
    q: 'What are the payment terms?',
    a: '50% is paid in advance at the start of each month, with the remaining 50% at month-end per your package schedule.',
  },
  {
    q: 'Which platforms do you manage?',
    a: 'We specialize in Instagram and Facebook management, with add-ons for TikTok, YouTube, LinkedIn and paid ads on Meta and Google.',
  },
  {
    q: 'Do packages include ad budget?',
    a: 'No. Paid advertising budgets (Meta/Google) and influencer budgets are separate from your package. We can manage the campaigns for you.',
  },
  {
    q: 'Can I customize a package?',
    a: 'Absolutely. Every engagement starts with a free audit call, and we tailor the plan to your goals. Add-ons let you scale specific deliverables.',
  },
  {
    q: 'What happens after month one?',
    a: 'You receive a monthly performance report plus a strategy meeting (on higher tiers). We double down on what’s working and optimize what isn’t.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <span className="font-display font-medium uppercase tracking-wide text-lg text-cream">
          {q}
        </span>
        <span
          className={`mt-1 w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border ${
            open
              ? 'bg-gold rotate-45 text-ink border-gold'
              : 'bg-transparent text-gold border-gold/40'
          }`}
        >
          <Plus className="w-4 h-4" />
        </span>
      </button>
      {open && (
        <p className="mt-3 text-cream/60 leading-relaxed max-w-3xl animate-fadeIn">{a}</p>
      )}
    </div>
  )
}

export default function FAQs() {
  return (
    <>
      <section className="bg-ink text-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[13px] font-bold tracking-[0.3em] text-gold/70 mb-3">FAQS</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-wide leading-tight max-w-3xl">
            Answers, <span className="text-gold">before</span> you ask
          </h1>
        </div>
      </section>

      <section className="bg-black py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Card className="rounded-sm p-8 md:p-12 bg-ink-panel border border-white/10">
            {faqs.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </Card>

          <div className="mt-12 text-center">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide mb-2">
              Still have questions?
            </h2>
            <p className="text-cream/55 mb-6">We’d love to walk you through everything.</p>
            <Button variant="primary" to="/contact" icon>
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}