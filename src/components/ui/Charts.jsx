import { useEffect, useRef, useState } from 'react'

import { BAR, DONE, SERIES, STAY } from './chartColors'

function arc(R, r, s, e) {
  const p = (rad, a) => `${(rad * Math.cos(a)).toFixed(2)} ${(rad * Math.sin(a)).toFixed(2)}`
  const large = e - s > Math.PI ? 1 : 0
  return `M ${p(R, s)} A ${R} ${R} 0 ${large} 1 ${p(R, e)} L ${p(r, e)} A ${r} ${r} 0 ${large} 0 ${p(r, s)} Z`
}

export function Donut({ data, tip }) {
  const [active, setActive] = useState(null)
  const total = data.reduce((s, d) => s + d[1], 0)
  const gap = 0.035
  const starts = data.reduce((acc, [, v]) => [...acc, acc[acc.length - 1] + (v / total) * Math.PI * 2], [-Math.PI / 2])
  const slices = data.map(([name, v], i) => ({
    name,
    v,
    i,
    d: arc(100, 62, starts[i] + gap / 2, starts[i + 1] - gap / 2),
  }))

  return (
    <>
      <svg className="donut" viewBox="-110 -110 220 220" role="img" aria-label={`Projects by service, ${total} total`}>
        {slices.map((s) => (
          <path
            key={s.name}
            d={s.d}
            fill={SERIES[s.i]}
            className={active !== null && active !== s.i ? 'dim' : undefined}
            onPointerEnter={(e) => {
              setActive(s.i)
              tip.show(e, <>{s.name}<br /><b>{s.v} projects · {Math.round((s.v / total) * 100)}%</b></>)
            }}
            onPointerMove={tip.move}
            onPointerLeave={() => {
              setActive(null)
              tip.hide()
            }}
          />
        ))}
        <text className="total" textAnchor="middle" y="14">{total}</text>
        <text className="total-l" textAnchor="middle" y="34">PROJECTS</text>
      </svg>
      <ul className="legend">
        {slices.map((s) => (
          <li key={s.name} onPointerEnter={() => setActive(s.i)} onPointerLeave={() => setActive(null)}>
            <i style={{ background: SERIES[s.i] }} />
            {s.name} <b>{s.v}</b>
          </li>
        ))}
      </ul>
    </>
  )
}

export function Bars({ data, tip }) {
  const ref = useRef(null)
  const [W, setW] = useState(360)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(([entry]) => setW(Math.max(200, entry.contentRect.width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const H = 260, top = 24, bot = 34
  const max = Math.max(...data.map((d) => d[1]))
  const slot = W / data.length
  const bw = Math.min(64, slot * 0.58)
  const plotH = H - top - bot

  return (
    <svg ref={ref} className="bars" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Projects launched per year">
      {[0.5, 1].map((f) => (
        <line key={f} className="grid" x1="0" x2={W} y1={top + plotH * (1 - f)} y2={top + plotH * (1 - f)} />
      ))}
      {data.map(([yr, v, note], i) => {
        const h = (plotH * v) / max
        const x = slot * i + (slot - bw) / 2
        const y = H - bot - h
        const partial = Boolean(note)
        const inside = h > 34 && !partial
        return (
          <g key={yr}>
            <path
              d={`M ${x} ${H - bot} V ${y + 4} Q ${x} ${y} ${x + 4} ${y} H ${x + bw - 4} Q ${x + bw} ${y} ${x + bw} ${y + 4} V ${H - bot} Z`}
              fill={BAR}
              fillOpacity={partial ? 0.5 : 1}
            />
            <text className={inside ? 'val' : 'val out'} x={x + bw / 2} y={inside ? y + 20 : y - 8} textAnchor="middle">
              {v}
            </text>
            <text className="yr" x={x + bw / 2} y={H - 8} textAnchor="middle">
              {yr}
              {partial ? '*' : ''}
            </text>
            <rect
              x={slot * i}
              y={top}
              width={slot}
              height={H - top}
              fill="transparent"
              onPointerEnter={(e) => tip.show(e, <>{yr}{note ? ` (${note})` : ''}<br /><b>{v} projects launched</b></>)}
              onPointerMove={tip.move}
              onPointerLeave={tip.hide}
            />
          </g>
        )
      })}
    </svg>
  )
}

export function DotGrid({ total, staying, tip }) {
  return (
    <>
      <div className="dots" role="img" aria-label={`${staying} of ${total} clients still on a maintenance plan`}>
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={i < staying ? 'on' : undefined}
            onPointerEnter={(e) => tip.show(e, i < staying ? 'Still on a maintenance plan' : 'Project delivered')}
            onPointerMove={tip.move}
            onPointerLeave={tip.hide}
          />
        ))}
      </div>
      <ul className="legend">
        <li><i style={{ background: STAY }} />Still with us <b>{staying}</b></li>
        <li><i style={{ background: DONE }} />Delivered <b>{total - staying}</b></li>
      </ul>
    </>
  )
}

export function DataTable({ head, rows }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button type="button" className="table-toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {open ? 'Hide table' : 'Show as table'}
      </button>
      {open && (
        <table className="data-table">
          <thead>
            <tr><th scope="col">{head[0]}</th><th scope="col">{head[1]}</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td></tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
