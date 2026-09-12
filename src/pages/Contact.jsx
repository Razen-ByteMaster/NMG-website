import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const info = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'hello@northwestmediagroup.com',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+20 100 000 0000',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: 'Alexandria, Egypt · Serving clients worldwide',
  },
]

const inputClass =
  'w-full bg-light border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-teal-nmg focus:ring-2 focus:ring-teal-nmg/20 transition-all text-[15px]'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="bg-dark-900 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel light>Contact</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl">
            Book Your <span className="text-teal-nmg">Free Audit</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            Tell us about your business and we’ll show you exactly how NMG can grow your online
            presence — within 48 hours.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {info.map((i) => (
              <Card key={i.label} className="bg-light rounded-2xl p-7 flex items-start gap-5 border border-slate-100 hover:border-teal-nmg shadow-card">
                <div className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center shrink-0">
                  <i.icon className="w-6 h-6 text-teal-dark" />
                </div>
                <div>
                  <div className="text-[12px] font-black uppercase tracking-wider text-slate-500 mb-1">
                    {i.label}
                  </div>
                  <div className="font-bold text-dark-900">{i.value}</div>
                </div>
              </Card>
            ))}

            <div className="bg-teal-nmg rounded-2xl p-7 text-dark-900">
              <h3 className="font-black text-lg mb-2">Prefer to skip the form?</h3>
              <p className="text-[15px] font-medium leading-relaxed">
                Jump straight on a call and we’ll walk you through a custom plan for your goals.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <Card className="bg-light rounded-2xl p-12 border border-slate-100 shadow-card text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-teal-nmg/15 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-teal-dark" />
                </div>
                <h3 className="text-2xl font-black mb-3">Message sent!</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Thanks for reaching out. We’ll get back to you within 24 hours to schedule your
                  free audit.
                </p>
              </Card>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="bg-light rounded-2xl p-8 md:p-10 border border-slate-100 shadow-card space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Full Name
                    </label>
                    <input required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Business Name
                    </label>
                    <input required className={inputClass} placeholder="Your business" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Email
                    </label>
                    <input required type="email" className={inputClass} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input className={inputClass} placeholder="+20 ..." />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                    Which package interests you?
                  </label>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a package
                    </option>
                    <option>GROW — 8,000 EGP/mo</option>
                    <option>SCALE — 11,000 EGP/mo</option>
                    <option>DOMINATE — 15,000 EGP/mo</option>
                    <option>Not sure yet — need advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                    What are your goals?
                  </label>
                  <textarea
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us a bit about your business and what you want to achieve..."
                  />
                </div>

                <Button type="submit" variant="primary" icon className="w-full justify-center">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}