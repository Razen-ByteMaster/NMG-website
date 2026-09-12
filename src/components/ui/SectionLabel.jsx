export default function SectionLabel({ light = false, children }) {
  return (
    <span
      className={`inline-block text-[13px] font-extrabold uppercase tracking-[0.28em] mb-5 ${
        light ? 'text-teal-nmg' : 'text-teal-dark'
      }`}
    >
      {children}
    </span>
  )
}