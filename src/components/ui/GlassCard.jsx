import { useRef } from 'react'
import { cn } from '@/lib/utils'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function GlassCard({ as: Tag = 'div', className, children, ...props }) {
  const innerRef = useRef(null)

  function handleMouseMove(e) {
    if (prefersReducedMotion()) return
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-glass-border1 via-glass-border2 to-glass-border3 p-px transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(124,156,255,0.35)]">
      <Tag
        ref={innerRef}
        onMouseMove={handleMouseMove}
        className={cn(
          'relative h-full overflow-hidden rounded-[11px] bg-[#0b0c16] p-6 backdrop-blur-sm',
          'before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-glass-border1/[0.08] before:via-glass-border2/[0.06] before:to-glass-border3/[0.08]',
          'after:pointer-events-none after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100',
          'after:[background:radial-gradient(160px_circle_at_var(--mx,50%)_var(--my,50%),rgba(124,156,255,0.18),transparent_70%)]',
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    </div>
  )
}
