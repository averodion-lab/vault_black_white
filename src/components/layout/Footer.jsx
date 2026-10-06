import { Link } from 'react-router-dom'

const PAGES = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const SERVICES = ['Digital Marketing', 'Web Development', 'AI Implementation', 'App Development', 'Software Dev', 'Maintenance']

const LEGAL = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/vaultdevelopment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1DzY5gekXH/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.85l-.46 2.91h-2.4v7.04A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <h3 className="font-display text-xl text-ink">
            VAULT{' '}
            <span className="bg-gradient-to-r from-glass-border1 via-glass-border2 to-glass-border3 bg-clip-text text-transparent">
              DIGITAL
            </span>
          </h3>
          <p className="mt-3 text-lg text-muted">
            Custom websites, AI solutions, and software development for businesses everywhere. Based in Middle Georgia.
          </p>
          <div className="mt-4 flex flex-col gap-1 text-sm">
            <a href="mailto:vaultdevelopmentagency@gmail.com" className="text-glass-border3">
              vaultdevelopmentagency@gmail.com
            </a>
            <a href="tel:6787556900" className="text-glass-border3">
              678-755-6900
            </a>
          </div>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-glass-border3/40 hover:text-glass-border3"
              >
                <span className="h-4 w-4">{s.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-10 sm:gap-16">
          <div>
            <h4 className="text-sm font-semibold text-ink">Pages</h4>
            <ul className="mt-3 flex flex-col gap-2 text-lg text-muted">
              {PAGES.map((p) => (
                <li key={p.to}>
                  <Link to={p.to}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">Services</h4>
            <ul className="mt-3 flex flex-col gap-2 text-lg text-muted">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/#services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col flex-wrap items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row sm:items-center">
        <span>© 2026 Vault Development. All rights reserved.</span>
        <div className="flex gap-4">
          {LEGAL.map((l) => (
            <Link key={l.to} to={l.to} className="transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
        <span>Built in Middle Georgia — Serving Nationwide</span>
      </div>
    </footer>
  )
}
