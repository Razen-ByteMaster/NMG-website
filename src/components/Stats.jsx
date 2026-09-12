import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import { stats } from '../data/testimonials'

function Counter({ value, suffix }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-black py-14 md:py-16 border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl font-semibold text-gold">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.2em] text-cream/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}