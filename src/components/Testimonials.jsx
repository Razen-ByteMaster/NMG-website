import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import SectionHead from './ui/SectionHead'
import useInView from '../hooks/useInView'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (!inView) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(id)
  }, [inView])

  const t = testimonials[index]

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead title="Word from the field" sub="Real results, real partners." align="center" />

        <div ref={ref} className="max-w-4xl mx-auto">
          <div key={index} className="animate-fadeUp text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>

            <div className="w-16 h-16 mx-auto rounded-full bg-ink border border-gold/50 text-gold flex items-center justify-center font-display text-2xl font-semibold mb-6">
              {t.name.charAt(0)}
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-cream leading-relaxed text-balance max-w-3xl mx-auto">
              “{t.quote}”
            </blockquote>

            <div className="mt-8">
              <div className="font-display font-medium uppercase tracking-[0.15em] text-lg">
                {t.name}
              </div>
              <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold mt-1">
                {t.services}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2.5 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-gold' : 'w-2 bg-cream/20 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}