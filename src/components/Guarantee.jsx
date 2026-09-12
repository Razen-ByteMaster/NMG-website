import { ShieldCheck } from 'lucide-react'
import Button from './ui/Button'

export default function Guarantee() {
  return (
    <section className="relative bg-dark-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-teal-nmg/10 blur-[120px] -top-[200px] -left-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-teal-nmg/15 flex items-center justify-center mb-8">
          <ShieldCheck className="w-10 h-10 text-teal-nmg" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl">
          14-Day <span className="text-teal-nmg">Money-Back</span> Guarantee
        </h2>

        <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
          If your specialist isn’t the right fit within the first 14 days, you get a full refund. No
          questions asked. We take on the risk so you don’t have to.
        </p>

        <div className="mt-8">
          <Button variant="primary" to="/contact" icon>
            Book a Free Audit
          </Button>
        </div>
      </div>
    </section>
  )
}