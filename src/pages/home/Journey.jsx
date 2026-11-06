import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bot, CalendarCheck, Check, Search, Star } from 'lucide-react'
import { Mark } from '@/components/ui/Mark'
import { JOURNEYS, JOURNEY_STEPS } from '@/data/site'

const ICONS = { search: Search, bot: Bot, calendar: CalendarCheck, star: Star }
const LAST = JOURNEY_STEPS.length - 1

const STEP_MS = 1200
const HOLD_MS = 2600

/**
 * Compact "how it works" panel. While it's on screen, the steps light up one by one (line fills, icon turns blue,
 * card lifts in, tick pops), the phone plays the matching messages, then it pauses, moves to the next kind of
 * business and plays again. Picking a tab stops the automatic switching.
 */
export function Journey() {
  const [tab, setTab] = useState(0)
  // Highest step reached; -1 before the first one lights up.
  const [reached, setReached] = useState(-1)
  const [locked, setLocked] = useState(false)
  const [visible, setVisible] = useState(false)
  const [still, setStill] = useState(false)
  const boxRef = useRef(null)
  const tabs = useRef([])
  const journey = JOURNEYS[tab]

  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      const id = requestAnimationFrame(() => setStill(true))
      return () => cancelAnimationFrame(id)
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 })
    io.observe(box)
    return () => io.disconnect()
  }, [])

  // The loop: advance one step at a time while visible, hold on the last, then reset (and maybe switch tab).
  useEffect(() => {
    if (!visible || still) return
    const done = reached >= LAST
    const id = setTimeout(() => {
      if (!done) {
        setReached((r) => r + 1)
        return
      }
      setReached(-1)
      if (!locked) setTab((t) => (t + 1) % JOURNEYS.length)
    }, done ? HOLD_MS : reached < 0 ? 500 : STEP_MS)
    return () => clearTimeout(id)
  }, [visible, still, reached, locked])

  function pick(i) {
    setLocked(true)
    setTab(i)
    setReached(-1)
  }

  const shown = still ? LAST : reached

  function onKey(e) {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = (tab + step + JOURNEYS.length) % JOURNEYS.length
    pick(next)
    tabs.current[next]?.focus()
  }

  return (
    <section className="sec wrap paper" id="journey">
      <div className="jr" ref={boxRef} style={{ '--f': Math.max(0, shown) / LAST }}>
        <div className="jr-main">
          <div className="jr-top">
            <span className="jr-label"><i aria-hidden="true" />How it works for</span>
            <div className="jr-tabs" role="tablist" aria-label="Kind of business" onKeyDown={onKey}>
              {JOURNEYS.map((j, i) => (
                <button
                  key={j.id}
                  ref={(el) => (tabs.current[i] = el)}
                  role="tab"
                  id={`jr-tab-${j.id}`}
                  aria-selected={i === tab}
                  aria-controls="jr-panel"
                  tabIndex={i === tab ? 0 : -1}
                  onClick={() => pick(i)}
                >
                  {j.label}
                </button>
              ))}
            </div>
          </div>

          <ol className="jr-flow" id="jr-panel" role="tabpanel" aria-labelledby={`jr-tab-${journey.id}`}>
            {JOURNEY_STEPS.map((s, i) => {
              const Icon = ICONS[s.icon]
              const c = journey.cards[i]
              const state = i < shown ? 'done' : i === shown ? 'on' : undefined
              return (
                <li className="jr-step" data-state={state} key={s.label} style={{ '--i': i }}>
                  <span className="jr-node" aria-hidden="true"><Icon size={18} strokeWidth={2} /></span>
                  <span className="jr-kind">{s.label}</span>
                  <div className="jr-card" key={journey.id}>
                    <div>
                      <b>{c.title}</b>
                      <span>{c.sub}</span>
                    </div>
                    <span className="jr-check" aria-hidden="true"><Check size={11} strokeWidth={3.2} /></span>
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="jr-foot">
            <h2>From first search to booked job. <span>One team runs it all.</span></h2>
            <Link className="link-arrow" to="/contact">Set this up for my business <b aria-hidden="true">→</b></Link>
          </div>
        </div>

        <figure className="jr-phone" aria-label={`Example text conversation for a ${journey.label.toLowerCase()} business`} role="img">
          <div className="jr-screen" aria-hidden="true">
            <div className="jr-phone-top">
              <Mark />
              <div>
                <b>Your Business</b>
                <small>AI assistant · online</small>
              </div>
            </div>
            <div className="jr-chat" key={journey.id}>
              {journey.chat.map((m, i) => (
                <span key={i} className={`msg ${m.from}`} data-show={m.step <= shown || undefined}>{m.text}</span>
              ))}
            </div>
          </div>
          <figcaption className="mono">Example conversation</figcaption>
        </figure>
      </div>
    </section>
  )
}
