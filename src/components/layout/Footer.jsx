import { Link } from 'react-router-dom'
import { Mark } from '@/components/ui/Mark'
import { CONTACT, PAGES, SERVICES, SOCIALS } from '@/data/site'

export function Footer() {
  return (
    <footer className="site wrap">
      <div className="foot-top">
        <div className="foot-brand">
          <Mark size={32} />
          <p>Custom websites, AI solutions, and software development for businesses everywhere. Based in Middle Georgia.</p>
          <div className="contact">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          </div>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            {PAGES.map((p) => (
              <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.title}><Link to="/#services">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.label} ↗</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="foot-word" aria-hidden="true">Vault</p>
      <div className="foot-bottom">
        <span>© 2026 Vault Development. All rights reserved.</span>
        <nav aria-label="Legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
        <span>Built in Middle Georgia · Serving Nationwide</span>
      </div>
    </footer>
  )
}
