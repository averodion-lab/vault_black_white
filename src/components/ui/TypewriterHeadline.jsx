import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/useInView'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function totalLength(segments) {
  return segments.reduce((sum, seg) => sum + (seg.text ? seg.text.length : 0), 0)
}

function renderSegments(segments, count) {
  let remaining = count
  return segments.map((seg, i) => {
    if (seg.break) return <br key={i} />
    const text = seg.text || ''
    const shown = text.slice(0, Math.max(0, remaining))
    remaining -= text.length
    return (
      <span key={i} className={seg.className}>
        {shown}
      </span>
    )
  })
}

/**
 * Types out a headline built from mixed-styled segments (e.g. plain text plus
 * a gradient-highlighted word) and line breaks, character by character.
 * segments: [{ text: string, className?: string } | { break: true }]
 */
export function TypewriterHeadline({ segments, speed = 40, className, as: Tag = 'h1', ...props }) {
  const total = totalLength(segments)
  const skipAnimation = typeof IntersectionObserver === 'undefined' || prefersReducedMotion()
  const [ref, isInView] = useInView()
  const [count, setCount] = useState(skipAnimation ? total : 0)

  useEffect(() => {
    if (skipAnimation) {
      setCount(total)
      return
    }
    if (!isInView) return
    let i = 0
    let timer
    function tick() {
      setCount(i)
      i++
      if (i <= total) timer = setTimeout(tick, speed)
    }
    tick()
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <Tag ref={ref} className={className} {...props}>
      {renderSegments(segments, count)}
      <span
        aria-hidden="true"
        className="ml-1 inline-block w-[3px] self-stretch animate-pulse bg-current align-middle"
        style={{ height: '0.8em' }}
      />
    </Tag>
  )
}
