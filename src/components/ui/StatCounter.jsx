import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/useInView'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function splitValue(value) {
  const match = value.match(/[0-9]+/)
  if (!match) return null
  return { prefix: value.slice(0, match.index), num: parseInt(match[0], 10), suffix: value.slice(match.index + match[0].length) }
}

export function StatCounter({ value, className }) {
  const parts = splitValue(value)
  const skipAnimation = typeof IntersectionObserver === 'undefined' || !parts || prefersReducedMotion()
  const [ref, isInView] = useInView()
  const [display, setDisplay] = useState(skipAnimation ? value : `${parts.prefix}0${parts.suffix}`)

  useEffect(() => {
    if (skipAnimation) {
      setDisplay(value)
      return
    }
    if (!isInView) return
    const duration = 1400
    let start = null
    let frame
    function step(ts) {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(`${parts.prefix}${Math.round(parts.num * eased)}${parts.suffix}`)
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
