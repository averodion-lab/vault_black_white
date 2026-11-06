import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { IsoIcon } from '@/components/ui/IsoIcon'
import { STEPS } from '@/data/site'

// No IntersectionObserver (old browsers, tests): just show the drawn state. False during prerendering, so hydration matches.
const NO_IO = typeof window !== 'undefined' && typeof IntersectionObserver === 'undefined'

export function Approach() {
  const lineRef = useRef(null)
  // Starts undrawn on both server and client so the prerendered HTML hydrates cleanly
  const [inView, setInView] = useState(false)
  const drawn = inView || NO_IO

  useEffect(() => {
    const el = lineRef.current
    if (!el || drawn) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [drawn])

  return (
    <section className="sec wrap" id="approach">
      <Reveal className="sec-head">
        <span className="mono">How we work</span>
        <h2>From first call to launch day</h2>
      </Reveal>
      <ol ref={lineRef} className={drawn ? 'steps go' : 'steps'} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {STEPS.map((s, i) => (
          <Reveal as="li" className="step" key={s.n} delay={i * 120}>
            <div className="frame">
              <div className="photo step-art">
                <IsoIcon id={s.icon} className="step-icon" />
              </div>
              <div className="plate" aria-hidden="true">
                <b>No. {s.n}</b>
                <span>{s.label}</span>
              </div>
            </div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
