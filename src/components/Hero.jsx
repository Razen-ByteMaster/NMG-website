import { Check } from 'lucide-react'
import Button from './ui/Button'

const trustBadges = [
  'No long-term contracts',
  '14-day money-back guarantee',
  'Your time zone, day one',
]

export default function Hero() {
  return (
    <section className="relative bg-dark-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-nmg/10 via-transparent to-transparent" />
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-teal-nmg/10 blur-[140px]"
          style={{ top: '-200px', right: '-150px' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block text-[13px] font-extrabold uppercase tracking-[0.28em] text-teal-nmg mb-6 animate-fadeIn">
            Trusted by 500+ Businesses
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.05] text-balance animate-fadeUp">
            Stop Overpaying for the <span className="text-teal-nmg">Marketing</span> Your
            Business Needs.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl animate-fadeUp" style={{ animationDelay: '150ms' }}>
            NMG specialists are AI-trained, college-educated, and working your time zone from day
            one — delivering a full marketing team’s output at less than the cost of a single hire.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-fadeUp" style={{ animationDelay: '300ms' }}>
            <Button
              variant="primary"
              icon
              onClick={() =>
                document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              See Our Packages
            </Button>
            <Button variant="outline" to="/contact">
              Book a Free Audit
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 animate-fadeUp" style={{ animationDelay: '450ms' }}>
            {trustBadges.map((b) => (
              <span key={b} className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/85">
                <span className="w-5 h-5 rounded-full bg-teal-nmg/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-teal-nmg" strokeWidth={4} />
                </span>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}