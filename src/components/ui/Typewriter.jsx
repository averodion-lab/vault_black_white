import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function Typewriter({ text, speed = 45, as: Tag = 'span', className, ...props }) {
  const skipAnimation = typeof IntersectionObserver === 'undefined' || prefersReducedMotion()
  const [ref, isInView] = useInView()
  const [display, setDisplay] = useState(skipAnimation ? text : '')

  useEffect(() => {
    if (skipAnimation) {
      setDisplay(text)
      return
    }
    if (!isInView) return
    let i = 0
    let timer
    function tick() {
      setDisplay(text.slice(0, i))
      i++
      if (i <= text.length) timer = setTimeout(tick, speed)
    }
    tick()
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <Tag ref={ref} className={cn('inline-flex items-baseline', className)} {...props}>
      {display}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] self-stretch animate-pulse bg-current"
      />
    </Tag>
  )
}
