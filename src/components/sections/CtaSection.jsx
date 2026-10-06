import { Link } from 'react-router-dom'
import { CopyLine } from '@/components/ui/CopyLine'
import { CONTACT } from '@/data/site'

export function CtaSection({ title = "Let's build something great.", eyebrow = 'Free consultation · No commitment' }) {
  return (
    <section className="cta wrap" id="contact">
      <div className="planet-sm" aria-hidden="true" />
      <span className="mono muted">{eyebrow}</span>
      <h2>{title}</h2>
      <div className="cta-row">
        <Link className="btn solid" to="/contact">Start your project →</Link>
        <CopyLine value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
        <CopyLine value={CONTACT.phone} href={CONTACT.phoneHref} />
      </div>
    </section>
  )
}
