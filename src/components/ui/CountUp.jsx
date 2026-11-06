import { useRef, useState } from 'react'
import { useIsoLayoutEffect } from '@/lib/useIsoLayoutEffect'

function split(value) {
  const m = value.match(/\d+/)
  if (!m) return null
  return { pre: value.slice(0, m.index), num: parseInt(m[0], 10), suf: value.slice(m.index + m[0].length) }
}

/**
 * Counts up from zero each time the number scrolls into view, and resets once it's fully out of view so it
 * replays next time. Shows the final value at rest (prerendered HTML, reduced motion, no IntersectionObserver).
 */
export function CountUp({ value, duration = 2000, delay = 0 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(value)

  useIsoLayoutEffect(() => {
    const el = ref.current
    const parts = split(value)
    if (!el || !parts || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const zero = `${parts.pre}0${parts.suf}`

    let raf = 0
    let timer = 0
    const run = () => {
      const t0 = performance.now()
      const step = (t) => {
        const p = Math.min((t - t0) / duration, 1)
        setDisplay(`${parts.pre}${Math.round(parts.num * (1 - Math.pow(1 - p, 3)))}${parts.suf}`)
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }
    const stop = () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }

    const enter = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      stop()
      setDisplay(zero)
      // Wait for the section's fade-in to settle so the count is visible
      timer = setTimeout(run, 350 + delay)
    }, { threshold: 0.6 })
    const leave = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) return
      stop()
      setDisplay(zero)
    }, { threshold: 0 })
    enter.observe(el)
    leave.observe(el)
    return () => {
      enter.disconnect()
      leave.disconnect()
      stop()
    }
  }, [value, duration, delay])

  return (
    <b ref={ref} aria-label={value}>
      {display}
    </b>
  )
}
