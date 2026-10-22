import { isoIcon } from '@/lib/isoIcons'
import { cn } from '@/lib/utils'

// Decorative isometric icon; its container's hover explodes it (see .iso-icon in index.css).
export function IsoIcon({ id, className, labels = true }) {
  const icon = isoIcon(id, { labels })
  if (!icon) return null
  return (
    <svg
      className={cn('iso-icon', className)}
      viewBox={icon.viewBox}
      width={icon.width}
      height={icon.height}
      fill="none"
      aria-hidden="true"
      focusable="false"
      // static markup generated from our own geometry, no user input
      dangerouslySetInnerHTML={{ __html: icon.markup }}
    />
  )
}
