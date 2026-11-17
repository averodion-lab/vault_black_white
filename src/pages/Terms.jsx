import { Seo } from '@/components/seo/Seo'
import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    h: 'Agreement to terms',
    body: (
      <p>
        These terms govern your use of zunovadigital.com. By using this site, you agree to them. If you don't
        agree, please don't use the site. These terms cover the website only — actual client projects are governed
        by a separate written agreement or statement of work signed before work begins.
      </p>
    ),
  },
  {
    h: 'What we offer',
    body: (
      <p>
        Zunova Digital provides custom web design, web development, AI implementation, app development, software
        development, and ongoing maintenance services. Pricing, scope, and timelines for any project are
        custom-quoted and confirmed in writing before work starts — nothing on this site is a binding price quote.
      </p>
    ),
  },
  {
    h: 'Using this site',
    body: (
      <>
        <p>You agree to use this site lawfully and not to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Submit false information through the contact form, or use it to send spam or unsolicited content.</li>
          <li>Attempt to interfere with the site's security, availability, or normal operation.</li>
          <li>Scrape, copy, or republish the site's content or design without our written permission.</li>
        </ul>
      </>
    ),
  },
  {
    h: 'Client projects, payments and revisions',
    body: (
      <>
        <p>
          Nothing is bought or booked directly through this site. Every project starts with a written quote or
          agreement that sets out the scope, price, timeline, and the terms below as they apply to that project.
          Where the two differ, the signed agreement wins.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="text-ink">Deposit.</span> Work begins once a deposit is received — typically 50% of the
            quoted price, with the balance due at launch. Larger projects can be split into milestone payments.
          </li>
          <li>
            <span className="text-ink">Revisions.</span> The number of design and content revision rounds is set in
            the quote. Changes beyond that scope, or new features requested after approval, are quoted separately.
          </li>
          <li>
            <span className="text-ink">Cancellation.</span> You can cancel a project in writing at any time. Work
            completed up to that point is billed, and the deposit covers that work; it isn't refunded once work has
            started. Deposits for projects that haven't started are refunded in full.
          </li>
          <li>
            <span className="text-ink">Ownership.</span> Once the final invoice is paid, the website, app, or software
            we built for you is yours, as described in the project agreement.
          </li>
        </ul>
      </>
    ),
  },
  {
    h: 'Intellectual property',
    body: (
      <p>
        The content, design, graphics, and code of this website belong to Zunova Digital unless otherwise noted,
        and are protected by applicable copyright and trademark law. Work we deliver to clients under a signed
        project agreement is licensed or assigned as specified in that agreement, not by these terms.
      </p>
    ),
  },
  {
    h: 'Third-party services',
    body: (
      <p>
        This site uses Formspree to deliver contact form submissions and Plausible Analytics for aggregate,
        cookieless site analytics. Your use of those features is also subject to those providers' own terms. We
        aren't responsible for the availability or content of third-party services we link to or rely on.
      </p>
    ),
  },
  {
    h: 'No warranty',
    body: (
      <p>
        This site is provided "as is." We work to keep it accurate and available, but we don't guarantee it will be
        error-free, uninterrupted, or perfectly suited to every purpose.
      </p>
    ),
  },
  {
    h: 'Limitation of liability',
    body: (
      <p>
        To the extent permitted by law, Zunova Digital isn't liable for indirect, incidental, or consequential
        damages arising from your use of this site. Nothing here limits liability that can't be limited under
        applicable law.
      </p>
    ),
  },
  {
    h: 'Governing law',
    body: <p>These terms are governed by the laws of the State of Georgia, USA, without regard to conflict-of-law rules.</p>,
  },
  {
    h: 'Changes to these terms',
    body: (
      <p>
        We may update these terms as the site or our services change. We'll revise the date below when we do.
        Continued use of the site after a change means you accept the updated terms.
      </p>
    ),
  },
  {
    h: 'Contact us',
    body: (
      <p>
        Questions about these terms? Reach us at{' '}
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

export function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service | Zunova Digital"
        description="The terms for using zunovadigital.com, and how client projects, payments, and intellectual property are handled by Zunova Digital."
        path="/terms"
        crumb="Terms of Service"
      />
      <section className="sec wrap" style={{ paddingTop: 'clamp(150px, 16vw, 220px)' }}>
        <div className="legal">
          <span className="mono muted">Legal</span>
          <h1>Terms of Service</h1>
          <p className="mono muted" style={{ display: 'block', marginTop: 18 }}>Last updated: November 2026</p>
          <div className="legal-body">
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                <div>{s.body}</div>
              </div>
            ))}
          </div>
          <div className="legal-note">
            This is a plain-language template, not a substitute for legal advice. If you're evaluating it for
            compliance purposes, have it reviewed by an attorney in your jurisdiction.
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn" to="/contact">Have a question? Contact us →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
