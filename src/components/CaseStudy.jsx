import Button from './ui/Button'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'
import { images } from '../data/images'

const before = ['Low visibility', 'Inconsistent branding', 'Low engagement']
const after = ['+340% Followers', '+280% Engagement', '+3.2X Bookings']

export default function CaseStudy() {
  return (
    <section id="cases" className="bg-black py-20 md:py-28 border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          number="06"
          title="Case Studies"
          sub="Real businesses. Real strategies. Real results."
        />

        <Card className="grid md:grid-cols-2 bg-ink-panel border border-white/10 rounded-sm overflow-hidden">
          <div className="relative min-h-[280px]">
            <img
              src={images.caseStudy}
              alt="Clinic case study"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-panel/60" />
          </div>
          <div className="p-8 md:p-12">
            <div className="text-[12px] font-display uppercase tracking-[0.25em] text-gold mb-2">
              Featured Result
            </div>
            <h3 className="font-display text-3xl font-semibold uppercase tracking-wide">
              Dental Clinic
            </h3>
            <p className="text-cream/50 text-sm tracking-[0.2em] uppercase mt-1 mb-8">
              Alexandria, Egypt
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-cream/40 mb-3">
                  Before
                </div>
                <ul className="space-y-2">
                  {before.map((b) => (
                    <li key={b} className="text-cream/60 text-[15px]">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  After
                </div>
                <ul className="space-y-2">
                  {after.map((a) => (
                    <li key={a} className="text-gold-light font-bold text-[15px]">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <Button to="/contact" variant="outlineGold" icon>
                View all cases
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}