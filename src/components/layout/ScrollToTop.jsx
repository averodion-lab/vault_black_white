import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to the top on page change, or to the #section when the link has a hash.
// Uses the smooth-scroll instance when it's running so the two never fight.
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const lenis = window.__lenis
    if (!hash) {
      if (lenis) lenis.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      if (lenis) lenis.scrollTo(el)
      else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}
