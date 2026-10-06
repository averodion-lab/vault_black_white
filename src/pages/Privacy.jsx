import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    h: 'Who we are',
    body: (
      <p>
        Vault Development ("Vault," "we," "us") builds websites, software, and AI tools for businesses. We're based
        in Middle Georgia and serve clients nationwide. This policy explains what information{' '}
        <span className="text-ink">vaultwebsiteagency.com</span> collects and how we use it. It covers this website
        only — not the separate client work we deliver under individual project agreements.
      </p>
    ),
  },
  {
    h: 'Information we collect',
    body: (
      <>
        <p>We collect information in two ways:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="text-ink">Contact form submissions.</span> When you submit our contact form, we collect
            your name, email address, phone number, business name, the service you're inquiring about, and your
            project message. Fields marked required are needed to respond to you; the rest are optional.
          </li>
          <li>
            <span className="text-ink">Analytics.</span> We use Plausible Analytics, a privacy-focused analytics
            service that does not use cookies and does not collect or store personal data. It reports aggregate
            information — page views, referrers, device type, and approximate location by country/region — that
            cannot be tied back to you individually.
          </li>
        </ul>
        <p className="mt-3">
          We also use your browser's local storage to briefly remember the timestamp of your last form submission,
          purely to prevent spam. This never leaves your device and isn't linked to any account or profile.
        </p>
      </>
    ),
  },
  {
    h: 'Cookies',
    body: (
      <p>
        This site does not use tracking or advertising cookies. The only client-side storage is the local,
        on-device spam-prevention check described above, which is not a cookie and isn't used for tracking.
      </p>
    ),
  },
  {
    h: 'How we use your information',
    body: (
      <p>
        We use contact form submissions to respond to your inquiry, prepare a quote, and — if you become a client —
        deliver the project you hired us for. We use analytics in aggregate to understand which pages are useful and
        where the site can be improved. We do not sell your information, and we do not use it for advertising.
      </p>
    ),
  },
  {
    h: 'Who we share it with',
    body: (
      <>
        <p>We share information with a small number of service providers that help us run this site:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="text-ink">Formspree</span> — processes and delivers contact form submissions to our
            inbox.
          </li>
          <li>
            <span className="text-ink">Plausible Analytics</span> — provides the aggregate, cookieless analytics
            described above.
          </li>
        </ul>
        <p className="mt-3">
          We don't share your information with anyone else, except where required by law.
        </p>
      </>
    ),
  },
  {
    h: 'Data retention',
    body: (
      <p>
        We keep contact form submissions as long as needed to respond to your inquiry and, for clients, for the
        duration of our working relationship plus a reasonable period afterward for our records. You can ask us to
        delete your information at any time — see "Your rights" below.
      </p>
    ),
  },
  {
    h: 'Your rights',
    body: (
      <p>
        You can ask us what information we have about you, ask us to correct it, or ask us to delete it, by emailing{' '}
        <a href="mailto:vaultdevelopmentagency@gmail.com" className="text-glass-border3">
          vaultdevelopmentagency@gmail.com
        </a>
        . We'll respond within a reasonable time.
      </p>
    ),
  },
  {
    h: "Children's privacy",
    body: (
      <p>
        This site is intended for business owners and decision-makers. It is not directed at children, and we do not
        knowingly collect information from anyone under 13.
      </p>
    ),
  },
  {
    h: 'Changes to this policy',
    body: (
      <p>
        If we change how we handle information, we'll update this page and revise the date below. Continued use of
        the site after a change means you accept the updated policy.
      </p>
    ),
  },
  {
    h: 'Contact us',
    body: (
      <p>
        Questions about this policy? Reach us at{' '}
        <a href="mailto:vaultdevelopmentagency@gmail.com" className="text-glass-border3">
          vaultdevelopmentagency@gmail.com
        </a>{' '}
        or{' '}
        <a href="tel:6787556900" className="text-glass-border3">
          678-755-6900
        </a>
        .
      </p>
    ),
  },
]

export function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Vault Development</title>
        <meta
          name="description"
          content="How Vault Development collects, uses, and protects information on vaultwebsiteagency.com."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vault Development" />
        <meta property="og:title" content="Privacy Policy | Vault Development" />
        <meta
          property="og:description"
          content="How Vault Development collects, uses, and protects information on vaultwebsiteagency.com."
        />
        <meta property="og:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <meta property="og:url" content="https://vaultwebsiteagency.com/privacy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Vault Development" />
        <meta
          name="twitter:description"
          content="How Vault Development collects, uses, and protects information on vaultwebsiteagency.com."
        />
        <meta name="twitter:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <link rel="canonical" href="https://vaultwebsiteagency.com/privacy" />
      </Helmet>
      <section className="sec wrap" style={{ paddingTop: 'clamp(150px, 16vw, 220px)' }}>
        <div className="legal">
          <span className="mono muted">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="mono muted" style={{ display: 'block', marginTop: 18 }}>Last updated: September 2026</p>
          <div className="legal-body">
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                <div>{s.body}</div>
              </div>
            ))}
          </div>
          <div className="legal-note">
            This policy is a plain-language summary of our practices, not a substitute for legal advice. If you're
            evaluating it for compliance purposes, have it reviewed by an attorney in your jurisdiction.
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn" to="/contact">Have a question? Contact us →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
