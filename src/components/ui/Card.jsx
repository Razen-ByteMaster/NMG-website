import useInView from '../../hooks/useInView'

export default function Card({
  children,
  delay = 0,
  className = '',
  hoverLift = true,
}) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? 'in-view' : ''} ${
        hoverLift
          ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-cardHover'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}