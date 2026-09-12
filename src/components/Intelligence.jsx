import { useEffect, useState } from 'react'
import Button from './ui/Button'
import Card from './ui/Card'
import SectionHead from './ui/SectionHead'
import useInView from '../hooks/useInView'

const metrics = [
  { label: 'Brand Strength', value: 78, verdict: 'Good' },
  { label: 'Visibility Score', value: 82, verdict: 'Very Good' },
  { label: 'Customer Experience', value: 74, verdict: 'Good' },
  { label: 'Growth Potential', value: 91, verdict: 'Excellent' },
]

function Gauge({ label, value, verdict, active }) {
  const [display, setDisplay] = useState(0)
  const R = 52
  const C = 2 * Math.PI * R

  useEffect(() => {
    if (!active) return
    const duration = 1500
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setDisplay(Math.round((1 - Math.pow(1 - p, 3)) * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, value])

  return (
    <div className="text-center">
      <div className="relative w-36 h-36 mx-auto">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={R} fill="none" stroke="#2a2a2a" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke="#C9A227"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C - (C * display) / 100}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl font-semibold">{display}</span>
          <span className="text-[10px] tracking-[0.2em] text-cream/40">/ 100</span>
        </div>
      </div>
      <div className="mt-4 font-display uppercase tracking-[0.15em] text-[13px]">{label}</div>
      <div className="mt-1 text-[12px] font-bold uppercase tracking-widest text-gold">
        {verdict}
      </div>
    </div>
  )
}

export default function Intelligence() {
  const [ref, inView] = useInView({ threshold: 0.25 })

  return (
    <section id="intelligence" className="bg-ink py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          number="05"
          title="Business Intelligence"
          sub="Real-time insights. Real results. Real growth."
          align="center"
        />
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <Card
              key={m.label}
              className="bg-ink-panel border border-white/10 hover:border-gold/50 rounded-sm p-8"
            >
              <Gauge {...m} active={inView} />
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/contact" variant="primary" icon>
            Get your free report
          </Button>
        </div>
      </div>
    </section>
  )
}