import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const DOT_COLORS = ['#7c9cff', '#ff8ce0', '#7cf5ff']

export function ProcessTimeline({ steps, alternate = false, className }) {
  const skipAnimation = typeof IntersectionObserver === 'undefined' || prefersReducedMotion()
  const [ref, inView] = useInView()
  const isInView = skipAnimation || inView

  return (
    <div ref={ref} className={cn('relative mx-auto max-w-2xl', className)}>
      <span className="absolute left-[13px] top-2 bottom-2 w-px bg-white/10" aria-hidden="true" />
      <span
        className="absolute left-[13px] top-2 w-px bg-gradient-to-b from-glass-border1 via-glass-border2 to-glass-border3 transition-[height] duration-[1600ms] ease-out"
        style={{ height: isInView ? '100%' : '0%' }}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-10">
        {steps.map((step, i) => {
          const fromRight = alternate && i % 2 === 1
          const delay = skipAnimation ? '0ms' : `${i * 300 + 100}ms`
          const dotColor = DOT_COLORS[i % DOT_COLORS.length]
          return (
            <div
              key={step.n}
              className={cn(
                'relative pl-10 transition-all duration-700 ease-out',
                isInView ? 'translate-x-0 opacity-100' : `${fromRight ? 'translate-x-6' : '-translate-x-6'} opacity-0`
              )}
              style={{ transitionDelay: isInView ? delay : '0ms' }}
            >
              <span
                className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-base font-display text-xs text-ink transition-[border-color,box-shadow] duration-500"
                style={{
                  borderColor: isInView ? dotColor : 'rgba(255,255,255,0.2)',
                  boxShadow: isInView ? `0 0 16px ${dotColor}66` : 'none',
                  transitionDelay: isInView ? delay : '0ms',
                }}
              >
                {step.n}
              </span>
              <h3 className="font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-lg text-muted">{step.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
