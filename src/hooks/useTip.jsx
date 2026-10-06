import { useState } from 'react'

/** Shared hover tooltip: one fixed element that follows the pointer. */
export function useTip() {
  const [tip, setTip] = useState(null)
  const show = (e, content) => setTip({ x: e.clientX, y: e.clientY, content })
  const move = (e) => setTip((t) => (t ? { ...t, x: e.clientX, y: e.clientY } : t))
  const hide = () => setTip(null)
  const node = tip ? (
    <div className="chart-tip" role="status" style={{ left: Math.min(tip.x + 14, window.innerWidth - 220), top: tip.y - 56 }}>
      {tip.content}
    </div>
  ) : null
  return { show, move, hide, node }
}
