import { useLayoutEffect, useRef, useState } from 'react'
import { TEAM } from '@/data/site'

/**
 * A short personal note from Rodion, shown as a chat bubble. When it scrolls in
 * from below it first shows a typing indicator, then the message. At rest (and
 * for reduced motion / no-JS) the message is simply visible.
 */
export function FounderNote({ children, tone = 'dark', className }) {
  const ref = useRef(null)
  const [typing, setTyping] = useState(false)
  const founder = TEAM[0]

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top <= window.innerHeight) return
    setTyping(true)
    let t = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      t = setTimeout(() => setTyping(false), 1100)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <figure ref={ref} className={['note', `note-${tone}`, className].filter(Boolean).join(' ')}>
      <img className="note-avatar" src={founder.avatar} alt="" width="56" height="56" loading="lazy" />
      <div className="note-body">
        <figcaption className="note-who">
          <b>{founder.name}</b> <span>{founder.title}</span>
        </figcaption>
        <blockquote className="note-bubble" aria-live="polite">
          {typing ? (
            <span className="typing" role="img" aria-label="Rodion is typing"><i /><i /><i /></span>
          ) : (
            <p>{children}</p>
          )}
        </blockquote>
      </div>
    </figure>
  )
}
