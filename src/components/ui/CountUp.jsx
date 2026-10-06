import { useLayoutEffect, useRef, useState } from 'react'

function split(value) {
  const m = value.match(/\d+/)
  if (!m) return null
  return { pre: value.slice(0, m.index), num: parseInt(m[0], 10), suf: value.slice(m.index + m[0].length) }
}

/** Shows the final value at rest; counts up from zero when it first scrolls into view from below the fold. */
export function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(value)

  useLayoutEffect(() => {
    const el = ref.current
    const parts = split(value)
    if (!el || !parts || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top <= window.innerHeight) return

    setDisplay(`${parts.pre}0${parts.suf}`)
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const step = (t) => {
        const p = Math.min((t - t0) / duration, 1)
        setDisplay(`${parts.pre}${Math.round(parts.num * (1 - Math.pow(1 - p, 3)))}${parts.suf}`)
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <b ref={ref} aria-label={value}>
      {display}
    </b>
  )
}
