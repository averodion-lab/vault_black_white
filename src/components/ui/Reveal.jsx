import { useLayoutEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Fades and lifts content in as it scrolls into view. Content is visible at
 * rest: only elements that start below the fold get the pending state, so the
 * first screen, thumbnails and no-JS/test environments always show everything.
 */
export function Reveal({ as: Tag = 'div', delay = 0, className, style, children, ...props }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top <= window.innerHeight) return

    el.classList.add('pending')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.remove('pending')
        io.disconnect()
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={cn('reveal', className)} style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }} {...props}>
      {children}
    </Tag>
  )
}
