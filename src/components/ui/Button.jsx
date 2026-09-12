import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const styles = {
  primary:
    'bg-teal-nmg text-white hover:bg-teal-dark',
  dark:
    'bg-dark-900 text-white hover:bg-dark-700',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-dark-900',
  outlineTeal:
    'border-2 border-teal-nmg text-teal-nmg hover:bg-teal-nmg hover:text-white',
}

export default function Button({
  children,
  variant = 'primary',
  icon = false,
  href,
  to,
  className = '',
  ...rest
}) {
  const classes = `
    inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[15px]
    transition-all duration-300 cursor-pointer select-none whitespace-nowrap
    ${styles[variant] ?? styles.primary} ${className}
  `
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {icon && <ArrowRight className="w-[18px] h-[18px]" />}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {icon && <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
      {icon && <ArrowRight className="w-[18px] h-[18px]" />}
    </button>
  )
}