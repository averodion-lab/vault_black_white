import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base/70 backdrop-blur-md">
      <nav className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg tracking-wide text-ink">
          VAULT{' '}
          <span className="bg-gradient-to-r from-glass-border1 via-glass-border2 to-glass-border3 bg-clip-text text-transparent">
            DIGITAL
          </span>
        </Link>
        <ul className="hidden gap-6 md:flex">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn('text-sm font-medium transition-colors', isActive ? 'text-ink' : 'text-muted hover:text-ink')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="text-sm font-semibold text-glass-border3 transition-colors hover:text-glass-border1"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          id="hbtn"
          aria-expanded={open}
          aria-controls="mnav"
          aria-label="Toggle navigation menu"
          className="text-ink transition-transform duration-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div
          id="mnav"
          className="flex flex-col gap-4 px-6 pb-6 [animation:fade-up-in_0.25s_ease-out_both] md:hidden"
        >
          {[...LINKS, { to: '/contact', label: 'Contact →' }].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-ink transition-colors hover:text-glass-border3"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
