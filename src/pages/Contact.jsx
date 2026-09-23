import { useState } from 'react'
import { Mail, MapPin, Phone, Send, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_TO_EMAIL,
} from '../config/email'

const info = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'razenmoamen@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+20 128 084 7899',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: 'Alexandria, Egypt · Serving clients worldwide',
  },
]

const inputClass =
  'w-full bg-ink border border-white/15 rounded-sm px-4 py-3.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-[15px] text-cream placeholder:text-cream/30'

const isConfigured =
  EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID_HERE' &&
  EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID_HERE' &&
  EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isConfigured) {
      setError(
        'The contact form is not configured yet. Please add your EmailJS keys in src/config/email.js (see README).'
      )
      setStatus('error')
      return
    }

    const form = e.target
    const data = new FormData(form)

    const params = {
      from_name: data.get('fullName') || '',
      business_name: data.get('businessName') || '',
      reply_to: data.get('email') || '',
      phone: data.get('phone') || '',
      package_name: data.get('package') || '',
      goals: data.get('goals') || '',
      to_email: EMAILJS_TO_EMAIL,
    }

    setStatus('sending')
    setError('')

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setStatus('sent')
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setError("We couldn't send your message right now. Please try again in a moment.")
      setStatus('error')
    }
  }

  return (
    <>
      <section className="bg-ink text-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[13px] font-bold tracking-[0.3em] text-gold/70 mb-3">CONTACT</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-wide leading-tight max-w-3xl">
            Book your <span className="text-gold">free audit</span>
          </h1>
          <p className="mt-6 text-lg text-cream/60 max-w-2xl">
            Tell us about your business and we’ll show you exactly how NMG can grow your presence —
            within 48 hours.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-black py-20 md:py-28 border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {info.map((i) => (
              <Card
                key={i.label}
                className="bg-ink-panel rounded-sm p-7 flex items-start gap-5 border border-white/10 hover:border-gold/50"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <i.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-cream/40 mb-1">
                    {i.label}
                  </div>
                  <div className="font-bold text-cream">{i.value}</div>
                </div>
              </Card>
            ))}

            <div className="bg-gold rounded-sm p-7 text-ink">
              <h3 className="font-display font-semibold uppercase tracking-wide text-lg mb-2">
                Prefer to skip the form?
              </h3>
              <p className="text-[15px] font-medium leading-relaxed text-ink/80">
                Jump straight on a call and we’ll walk you through a custom plan for your goals.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <Card className="bg-ink-panel rounded-sm p-12 border border-gold/30 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide mb-3">
                  Message sent
                </h3>
                <p className="text-cream/60 max-w-md mx-auto">
                  Thanks for reaching out. We’ll get back to you within 24 hours to schedule your
                  free audit.
                </p>
              </Card>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-ink-panel rounded-sm p-8 md:p-10 border border-white/10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[0.2em] text-cream/40 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      name="fullName"
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[0.2em] text-cream/40 mb-2">
                      Business Name
                    </label>
                    <input
                      required
                      name="businessName"
                      className={inputClass}
                      placeholder="Your business"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[0.2em] text-cream/40 mb-2">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-[0.2em] text-cream/40 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input name="phone" className={inputClass} placeholder="+20 ..." />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-[0.2em] text-cream/40 mb-2">
                    Which package interests you?
                  </label>
                  <select name="package" className={inputClass} defaultValue="">
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
                  <label className="block text-[12px] font-bold uppercase tracking-[0.2em] text-cream/40 mb-2">
                    What are your goals?
                  </label>
                  <textarea
                    name="goals"
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us a bit about your business and what you want to achieve..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-sm bg-red-500/10 border border-red-500/40 px-4 py-3.5 text-[14px] text-red-200">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  icon
                  className="w-full justify-center"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send message'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}