import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

const HIDDEN_TRANSFORM = {
  up: 'translate-y-6',
  left: '-translate-x-12',
  right: 'translate-x-12',
}

export function Reveal({ as: Tag = 'div', delay = 0, direction = 'up', className, children, ...props }) {
  const [ref, isInView] = useInView()
  const hidden = HIDDEN_TRANSFORM[direction] || HIDDEN_TRANSFORM.up

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? 'translate-x-0 translate-y-0 opacity-100' : `${hidden} opacity-0`,
        className
      )}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </Tag>
  )
}
