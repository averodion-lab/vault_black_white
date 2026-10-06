import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Mark } from '@/components/ui/Mark'
import { CONTACT, PAGES } from '@/data/site'

/**
 * Fixed header in a difference-blend layer, so it reads black over white and
 * white over black anywhere on the page. The avatar sits outside the blend so
 * the photo keeps its real colors. The dots button opens a full-screen menu.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const openRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  function close() {
    setOpen(false)
    openRef.current?.focus()
  }

  return (
    <>
      <header className="site-header">
        <Link className="site-mark" to="/" aria-label="Vault Development home">
          <Mark />
        </Link>
        <Link className="site-pill" to="/contact">
          Contact Now
          <span className="dots" aria-hidden="true"><b /><b /></span>
        </Link>
        <button
          ref={openRef}
          className="menu-dots"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          <span><i /><i /><i /></span>
        </button>
      </header>
      <span
        className="site-avatar"
        role="img"
        aria-label="Rodion Averianov, founder"
        style={{ backgroundImage: "url('/assets/images/team-rodion-averianov.jpg')" }}
      />

      <div className={open ? 'menu open' : 'menu'} id="site-menu" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <button ref={closeRef} className="close" aria-label="Close menu" onClick={close} tabIndex={open ? 0 : -1}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
        <nav aria-label="Main">
          {PAGES.map((p) => (
            <NavLink key={p.to} to={p.to} end onClick={close} tabIndex={open ? 0 : -1}>
              {p.label}
            </NavLink>
          ))}
        </nav>
        <div className="meta mono">
          <span>{CONTACT.location} · Serving nationwide</span>
          <span>{CONTACT.phone}</span>
        </div>
      </div>
    </>
  )
}
