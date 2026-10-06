import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FounderNote } from '@/components/sections/FounderNote'

const QUICK_LINKS = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Vault Development</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="notfound wrap">
        <span className="mono muted">Error 404</span>
        <h1>Locked.</h1>
        <p className="muted" style={{ margin: 0, fontSize: 20 }}>Page not found. The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link className="btn-arrow" to="/">
          Back to home <b aria-hidden="true">→</b>
        </Link>
        <FounderNote className="note-side">This page is locked. Let me get you back on track.</FounderNote>
        <nav aria-label="Quick links">
          {QUICK_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </nav>
      </section>
    </>
  )
}
