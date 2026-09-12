import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const styles = {
  primary: 'bg-gold text-ink hover:bg-gold-light hover:shadow-goldGlow',
  dark: 'bg-cream text-ink hover:bg-white',
  outline: 'border-2 border-cream/70 text-cream hover:bg-cream hover:text-ink hover:border-cream',
  outlineGold: 'border-2 border-gold text-gold hover:bg-gold hover:text-ink',
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
    inline-flex items-center gap-2 px-8 py-4 rounded-sm font-display font-medium uppercase tracking-[0.15em] text-[14px]
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
        {icon && <ArrowRight className="w-[18px] h-[18px]" />}
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