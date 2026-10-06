import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

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
      <div className="px-6 py-24 text-center">
        <h1 className="font-display text-3xl text-ink">Page not found</h1>
        <p className="mt-4 text-lg text-muted">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="mt-6 inline-block text-glass-border3">
          Back to home →
        </Link>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted">
          {QUICK_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
