import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { CONTACT } from '@/data/site'

const SECTIONS = [
  {
    h: 'Our commitment',
    body: (
      <p>
        Zunova Digital wants everyone to be able to use zunovadigital.com, whatever their abilities or the
        technology they use. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA, and we
        treat accessibility as part of how the site is built, not a layer added afterwards.
      </p>
    ),
  },
  {
    h: 'What we do',
    body: (
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>Every page has a single, descriptive heading structure and a skip link straight to the main content.</li>
        <li>All functionality works with a keyboard alone, with a visible focus indicator on every interactive element.</li>
        <li>Images carry descriptive alternative text; decorative visuals are hidden from assistive technology.</li>
        <li>Text and background colours meet WCAG contrast ratios, and text scales cleanly up to 200%.</li>
        <li>Animations respect your operating system&apos;s &ldquo;reduce motion&rdquo; preference.</li>
        <li>The contact form labels every field and reports errors in text, not colour alone.</li>
      </ul>
    ),
  },
  {
    h: 'Known limitations',
    body: (
      <p>
        Some portfolio screenshots show third-party websites whose own accessibility we don&apos;t control. The
        contact form is delivered by Formspree, and the analytics script by Plausible; both are loaded in ways that
        don&apos;t affect how you navigate this site.
      </p>
    ),
  },
  {
    h: 'Tell us if something is hard to use',
    body: (
      <p>
        If any part of this site is difficult to use, or you&apos;d like content in a different format, email{' '}
        <a href={`mailto:${CONTACT.email}`} className="text-glass-border3">{CONTACT.email}</a> or call{' '}
        <a href={CONTACT.phoneHref} className="text-glass-border3">{CONTACT.phone}</a>. We respond within one business
        day and will work with you to fix the problem.
      </p>
    ),
  },
]

export function Accessibility() {
  return (
    <>
      <Seo
        title="Accessibility Statement | Zunova Digital"
        description="How zunovadigital.com is built to meet WCAG 2.2 AA, what we do to keep it accessible, and how to reach us if something is hard to use."
        path="/accessibility"
        crumb="Accessibility"
      />
      <section className="sec wrap" style={{ paddingTop: 'clamp(150px, 16vw, 220px)' }}>
        <div className="legal">
          <span className="mono muted">Legal</span>
          <h1>Accessibility</h1>
          <p className="mono muted" style={{ display: 'block', marginTop: 18 }}>Last updated: November 2026</p>
          <div className="legal-body">
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                <div>{s.body}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn" to="/contact">Need help with something? Contact us →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
