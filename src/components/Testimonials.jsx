import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import SectionLabel from './ui/SectionLabel'
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
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>What Our Clients Say</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Real Results, <span className="text-teal-dark">Real Partners</span>
          </h2>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div key={index} className="animate-fadeUp text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-teal-nmg fill-teal-nmg" />
              ))}
            </div>

            <div className="w-16 h-16 mx-auto rounded-full bg-dark-900 text-teal-nmg flex items-center justify-center text-2xl font-black mb-6">
              {t.name.charAt(0)}
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-dark-900 leading-relaxed text-balance max-w-3xl mx-auto">
              “{t.quote}”
            </blockquote>

            <div className="mt-8">
              <div className="font-extrabold text-lg">{t.name}</div>
              <div className="text-[13px] font-bold uppercase tracking-wider text-slate-500 mt-1">
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
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-teal-nmg' : 'w-2.5 bg-slate-300 hover:bg-teal-nmg/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}