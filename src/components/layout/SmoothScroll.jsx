import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/**
 * Inertia scrolling for mouse wheels and trackpads (touch keeps native scrolling).
 * Off for visitors who prefer reduced motion, and in tests.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (import.meta.env.MODE === 'test') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.09, anchors: true })
    window.__lenis = lenis
    return () => {
      lenis.destroy()
      delete window.__lenis
    }
  }, [])
  return null
}
