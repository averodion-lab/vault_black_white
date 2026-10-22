import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { IsoIcon } from '@/components/ui/IsoIcon'
import { SERVICES } from '@/data/site'
import { cn } from '@/lib/utils'

export function Services() {
  // One open row at a time: a mouse opens it on hover; touch toggles it on tap,
  // and a tap anywhere outside the list closes it (sticky :hover can't do that).
  const [open, setOpen] = useState(null)
  const pointer = useRef('mouse')
  const listRef = useRef(null)

  useEffect(() => {
    if (open === null) return
    const close = (e) => {
      if (e.pointerType !== 'mouse' && !listRef.current?.contains(e.target)) setOpen(null)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])

  return (
    <section className="sec wrap paper" id="services">
      <Reveal className="sec-head">
        <span className="mono">Tailored services</span>
        <h2>Custom services for your business</h2>
      </Reveal>
      <ol className="svc-list" ref={listRef}>
        {SERVICES.map((s, i) => (
          <Reveal
            as="li"
            className={cn('svc-block', i % 2 && 'flip', open === i && 'open')}
            key={s.title}
            onPointerDown={(e) => { pointer.current = e.pointerType }}
            onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(i)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen((o) => (o === i ? null : o))}
            onClick={() => pointer.current !== 'mouse' && setOpen((o) => (o === i ? null : i))}
          >
            <div className="svc-num">
              <IsoIcon id={s.icon} className="svc-icon" />
              <span className="mono">/{String(i + 1).padStart(2, '0')}</span>
              <span className="mono">{s.tag}</span>
            </div>
            <div className="svc-main">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
            <div className="svc-side">
              <ul className="chips" aria-label={`${s.title} includes`}>
                {s.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              {s.projects.length > 0 && (
                <p className="built-for">
                  <span className="mono">Built for</span>
                  <Link to="/portfolio">
                    {s.projects.slice(0, 3).join(', ')}
                    {s.projects.length > 3 && ` + ${s.projects.length - 3} more`}
                  </Link>
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
