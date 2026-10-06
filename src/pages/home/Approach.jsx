import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { STEPS } from '@/data/site'

export function Approach() {
  const lineRef = useRef(null)
  const [drawn, setDrawn] = useState(typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = lineRef.current
    if (!el || drawn) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setDrawn(true)
        io.disconnect()
      }
    }, { threshold: 1 })
    io.observe(el)
    return () => io.disconnect()
  }, [drawn])

  return (
    <section className="sec wrap" id="approach">
      <Reveal className="sec-head">
        <span className="mono">How we work</span>
        <h2>From first call to launch day</h2>
      </Reveal>
      <div ref={lineRef} className={drawn ? 'orbit-line go' : 'orbit-line'} />
      <ol className="steps" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {STEPS.map((s, i) => (
          <Reveal as="li" className="step" key={s.n} delay={i * 120}>
            <span className="n">{s.n} / {s.label}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
