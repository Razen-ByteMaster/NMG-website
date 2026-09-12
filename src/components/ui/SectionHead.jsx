import useInView from '../../hooks/useInView'

export default function SectionHead({ number, title, sub, align = 'left', light = false }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} mb-12 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      }`}
    >
      {number && (
        <div className="text-[13px] font-bold tracking-[0.3em] text-gold/70 mb-3">{number}</div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase leading-[1.05] tracking-wide text-balance">
        {title}
      </h2>
      {sub && <p className="mt-5 text-lg text-cream/60 leading-relaxed">{sub}</p>}
    </div>
  )
}