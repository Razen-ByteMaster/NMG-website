import Card from '../components/ui/Card'

const sections = [
  {
    title: 'Data We Collect',
    body: 'When you contact us through the audit form, we collect the information you provide: your name, business name, email, phone number, and details about your marketing goals.',
  },
  {
    title: 'How We Use Your Data',
    body: 'We use your information solely to respond to your enquiry, prepare your free marketing audit, and deliver the services you request. We never sell or rent your personal data to third parties.',
  },
  {
    title: 'Data Sharing',
    body: 'Your data is only shared with the NMG specialists directly involved in delivering your audit or campaign. We keep it inside our team and process it securely.',
  },
  {
    title: 'Data Retention',
    body: 'We retain enquiry records only as long as needed to serve you or as required by law. You may request deletion of your data at any time by contacting us.',
  },
  {
    title: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal data at any time. Simply email us and we will action your request promptly.',
  },
]

export default function Privacy() {
  return (
    <>
      <section className="bg-ink text-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-[13px] font-bold tracking-[0.3em] text-gold/70 mb-3">PRIVACY</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-wide leading-tight max-w-3xl">
            Our commitment to <span className="text-gold">your privacy</span>
          </h1>
        </div>
      </section>

      <section className="bg-black py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
          {sections.map((s) => (
            <Card
              key={s.title}
              className="bg-ink-panel rounded-sm p-8 border border-white/10 hover:border-gold/50"
            >
              <h2 className="font-display text-xl font-medium uppercase tracking-wide mb-3">
                {s.title}
              </h2>
              <p className="text-cream/60 leading-relaxed">{s.body}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}