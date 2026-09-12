import { Check, Sparkles, Plus, FileSignature, XCircle } from 'lucide-react'
import { packages, addOns, contractTerms, notIncluded } from '../data/packages'
import Button from './ui/Button'
import Card from './ui/Card'
import SectionLabel from './ui/SectionLabel'

function PackageCard({ pkg, i }) {
  const popular = pkg.badge === 'MOST POPULAR'
  return (
    <Card
      delay={i * 140}
      className={`relative flex flex-col rounded-2xl p-8 overflow-hidden transition-all duration-300 ${
        popular
          ? 'bg-dark-900 text-white shadow-cardHover lg:-translate-y-4'
          : 'bg-white text-dark-900 shadow-card border border-slate-100 hover:border-teal-nmg'
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-teal-nmg text-dark-900 text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-bl-2xl flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Most Popular
        </div>
      )}

      <div className="flex items-center justify-between mb-1">
        <h3 className={`text-2xl font-black ${popular ? 'text-teal-nmg' : 'text-dark-900'}`}>
          {pkg.name}
        </h3>
      </div>
      <p className={`text-[13px] leading-snug mb-6 ${popular ? 'text-white/70' : 'text-slate-500'}`}>
        {pkg.tagline}
      </p>

      <div className={`flex items-end gap-1 mb-8 pb-8 border-b ${popular ? 'border-white/15' : 'border-slate-100'}`}>
        <span className="text-4xl font-black">{pkg.price}</span>
        <div className="mb-1">
          <div className="text-[12px] font-bold uppercase tracking-wide text-slate-400">EGP /</div>
          <div className="text-[12px] font-bold uppercase tracking-wide text-slate-400">month</div>
        </div>
      </div>

      <div className="space-y-7 flex-1">
        {pkg.sections.map((sec) => (
          <div key={sec.title}>
            <h4 className={`text-[11px] font-black uppercase tracking-[0.22em] mb-3 ${
              popular ? 'text-teal-nmg' : 'text-teal-dark'
            }`}>
              {sec.title}
            </h4>
            <ul className="space-y-2.5">
              {sec.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                    popular ? 'bg-teal-nmg/20' : 'bg-teal-nmg/10'
                  }`}>
                    <Check className={`w-2.5 h-2.5 ${popular ? 'text-teal-nmg' : 'text-teal-dark'}`} strokeWidth={4} />
                  </span>
                  <span className={`text-[14px] ${popular ? 'text-white/85' : 'text-slate-700'}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`mt-8 pt-6 border-t ${popular ? 'border-white/15' : 'border-slate-100'}`}>
        <div className={`text-[13px] font-bold mb-5 ${popular ? 'text-white/85' : 'text-slate-600'}`}>
          <span className={popular ? 'text-teal-nmg' : 'text-teal-dark'}>GOAL: </span>
          {pkg.goal}
        </div>
        <Button
          variant={popular ? 'primary' : 'dark'}
          href="#contact"
          icon
          className="w-full justify-center"
        >
          Book a Free Audit
        </Button>
      </div>
    </Card>
  )
}

export default function Packages() {
  return (
    <section id="packages" className="bg-light py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <SectionLabel>Our Packages</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-balance">
            Flexible Plans. <span className="text-teal-dark">Pricing For Scale.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Choose the package that matches your goals. Every plan is month-to-month with our
            14-day money-back guarantee.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 items-start">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} i={i} />
          ))}
        </div>

        <div className="mt-14">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:border-teal-nmg">
              <div className="w-12 h-12 rounded-xl bg-teal-nmg/10 flex items-center justify-center mb-5">
                <Plus className="w-6 h-6 text-teal-dark" />
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-wide mb-4 text-[15px]">
                Add-Ons
              </h3>
              <ul className="space-y-3">
                {addOns.map((a) => (
                  <li key={a.name} className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <div>
                      <div className="text-[14px] font-bold text-dark-900">{a.name}</div>
                      <div className="text-[12px] text-slate-500">({a.detail})</div>
                    </div>
                    <div className="text-[14px] font-black text-teal-dark whitespace-nowrap">
                      {a.price}
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:border-teal-nmg">
              <div className="w-12 h-12 rounded-xl bg-teal-nmg/10 flex items-center justify-center mb-5">
                <FileSignature className="w-6 h-6 text-teal-dark" />
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-wide mb-4 text-[15px]">
                Contract Terms
              </h3>
              <ul className="space-y-3">
                {contractTerms.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-teal-nmg/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-teal-dark" strokeWidth={4} />
                    </span>
                    <span className="text-[14px] text-slate-700">{t}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:border-teal-nmg">
              <div className="w-12 h-12 rounded-xl bg-teal-nmg/10 flex items-center justify-center mb-5">
                <XCircle className="w-6 h-6 text-teal-dark" />
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-wide mb-4 text-[15px]">
                What’s Not Included?
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span className="text-[14px] text-slate-700">{t}</span>
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