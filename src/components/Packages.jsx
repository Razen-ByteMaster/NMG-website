import { Check, Sparkles, Plus, FileSignature, XCircle } from 'lucide-react'
import { packages, addOns, contractTerms, notIncluded } from '../data/packages'
import Button from './ui/Button'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'

function PackageCard({ pkg, i }) {
  const popular = pkg.badge === 'MOST POPULAR'
  return (
    <Card
      delay={i * 140}
      className={`relative flex flex-col rounded-sm p-8 overflow-hidden transition-all duration-300 ${
        popular
          ? 'bg-ink text-cream border-2 border-gold shadow-goldGlow lg:-translate-y-4'
          : 'bg-ink-panel text-cream border border-white/10 hover:border-gold/60'
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gold text-ink text-[11px] font-display font-medium uppercase tracking-[0.2em] px-4 py-2 rounded-bl-sm flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Most Popular
        </div>
      )}

      <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.1em] text-gold">
        {pkg.name}
      </h3>
      <p className="text-[13px] leading-snug mb-6 mt-1 text-cream/55">{pkg.tagline}</p>

      <div className="flex items-end gap-2 mb-8 pb-8 border-b border-white/10">
        <span className="font-display text-5xl font-semibold">{pkg.price}</span>
        <div className="mb-1.5">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold">EGP /</div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-cream/40">
            month
          </div>
        </div>
      </div>

      <div className="space-y-7 flex-1">
        {pkg.sections.map((sec) => (
          <div key={sec.title}>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3 text-gold">
              {sec.title}
            </h4>
            <ul className="space-y-2.5">
              {sec.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-gold" strokeWidth={4} />
                  </span>
                  <span className="text-[14px] text-cream/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="text-[13px] font-bold mb-5 text-cream/70">
          <span className="text-gold">GOAL: </span>
          {pkg.goal}
        </div>
        <Button
          variant={popular ? 'primary' : 'outlineGold'}
          to="/contact"
          icon
          className="w-full justify-center"
        >
          Book a free audit
        </Button>
      </div>
    </Card>
  )
}

export default function Packages() {
  return (
    <section id="packages" className="bg-black py-20 md:py-28 border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          title="NMG Packages"
          sub="Flexible plans. Pricing for scale. Every plan is month-to-month with our 14-day money-back guarantee."
          align="center"
        />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 items-start">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} i={i} />
          ))}
        </div>

        <div className="mt-14">
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="bg-ink-panel rounded-sm p-8 border border-white/10 hover:border-gold/50">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                <Plus className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-medium uppercase tracking-[0.15em] mb-4 text-[15px]">
                Add-Ons
              </h3>
              <ul className="space-y-3">
                {addOns.map((a) => (
                  <li
                    key={a.name}
                    className="flex items-start justify-between gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="text-[14px] font-bold text-cream">{a.name}</div>
                      <div className="text-[12px] text-cream/40">({a.detail})</div>
                    </div>
                    <div className="text-[14px] font-display font-medium text-gold whitespace-nowrap">
                      {a.price}
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-ink-panel rounded-sm p-8 border border-white/10 hover:border-gold/50">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                <FileSignature className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-medium uppercase tracking-[0.15em] mb-4 text-[15px]">
                Contract Terms
              </h3>
              <ul className="space-y-3">
                {contractTerms.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-gold" strokeWidth={4} />
                    </span>
                    <span className="text-[14px] text-cream/75">{t}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-ink-panel rounded-sm p-8 border border-white/10 hover:border-gold/50">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                <XCircle className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-medium uppercase tracking-[0.15em] mb-4 text-[15px]">
                What’s Not Included?
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-[14px] text-cream/75">{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}