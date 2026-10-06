import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function GradientButton({ to, href, className, children, ...props }) {
  const classes = cn(
    'inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold',
    'bg-gradient-to-r from-glass-border1 via-glass-border2 to-glass-border3 text-base',
    'transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_-8px_rgba(124,156,255,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glass-border1',
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
