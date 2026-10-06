import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { FounderNote } from '@/components/sections/FounderNote'
import { CONTACT } from '@/data/site'

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/
const RL_LAST_KEY = 'vd_fl'
const RL_HIST_KEY = 'vd_fh'
const RL_WINDOW_MS = 3600000
const RL_MAX = 3
const RL_COOLDOWN_MS = 60000

function sanitize(str, maxLen = 500) {
  return str.replace(/[<>"'`]/g, '').substring(0, maxLen)
}

function isRateLimited() {
  const now = Date.now()
  const last = parseInt(window.localStorage.getItem(RL_LAST_KEY) || '0', 10)
  if (now - last < RL_COOLDOWN_MS) {
    const wait = Math.ceil((RL_COOLDOWN_MS - (now - last)) / 1000)
    return `Please wait ${wait} seconds before submitting again.`
  }
  const hist = JSON.parse(window.localStorage.getItem(RL_HIST_KEY) || '[]').filter((ts) => now - ts < RL_WINDOW_MS)
  if (hist.length >= RL_MAX) {
    return 'Too many submissions. Please try again later or email us directly.'
  }
  return null
}

function recordSubmission() {
  const now = Date.now()
  window.localStorage.setItem(RL_LAST_KEY, now.toString())
  const hist = JSON.parse(window.localStorage.getItem(RL_HIST_KEY) || '[]').filter((ts) => now - ts < RL_WINDOW_MS)
  hist.push(now)
  window.localStorage.setItem(RL_HIST_KEY, JSON.stringify(hist))
}

const SERVICES = [
  'Digital Marketing',
  'Web Development',
  'AI Implementation',
  'App Development',
  'Software Development',
  'Maintenance & Support',
  'Not sure yet',
]

export function Contact() {
  const [values, setValues] = useState({ fn: '', ln: '', em: '', ph: '', bz: '', sv: '', ms: '', _hp: '' })
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function set(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (values._hp) {
      setSent(true)
      return
    }

    const fn = values.fn.trim()
    const ln = values.ln.trim()
    const em = values.em.trim()
    const ms = values.ms.trim()

    if (!fn || !em || !values.sv || !ms) {
      setError('Please fill in all required fields (*)')
      return
    }
    if (!EMAIL_RE.test(em)) {
      setError('Please enter a valid email address.')
      return
    }
    if (fn.length > 50 || ln.length > 50) {
      setError('Name must be under 50 characters.')
      return
    }
    if (ms.length < 10) {
      setError('Please describe your project in at least 10 characters.')
      return
    }
    if (ms.length > 2000) {
      setError('Message is too long — please keep it under 2000 characters.')
      return
    }

    const rateLimitError = isRateLimited()
    if (rateLimitError) {
      setError(rateLimitError)
      return
    }

    setSending(true)
    try {
      const res = await fetch('https://formspree.io/f/xnjgpoza', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: sanitize(fn + (ln ? ' ' + ln : ''), 100),
          email: em.substring(0, 254),
          phone: sanitize(values.ph.trim(), 20),
          business: sanitize(values.bz.trim(), 100),
          service: values.sv,
          message: sanitize(ms, 2000),
        }),
      })
      if (res.ok) {
        recordSubmission()
        setSent(true)
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Free Web Design Quote | Vault Development</title>
        <meta
          name="description"
          content="Get in touch with Vault Development. Tell us about your project and we'll respond within 24 hours. No pressure, no commitment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vault Development" />
        <meta property="og:title" content="Contact | Vault Development" />
        <meta
          property="og:description"
          content="Get in touch with Vault Development. Tell us about your project and we'll respond within 24 hours."
        />
        <meta property="og:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <meta property="og:url" content="https://vaultwebsiteagency.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Vault Development" />
        <meta
          name="twitter:description"
          content="Get in touch with Vault Development. Tell us about your project and we'll respond within 24 hours."
        />
        <meta name="twitter:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <link rel="canonical" href="https://vaultwebsiteagency.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Vault Development',
            description: "Get in touch with Vault Development. Tell us about your project and we'll respond within 24 hours.",
            url: 'https://vaultwebsiteagency.com/contact',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'Vault Development',
              telephone: '+16787556900',
              email: 'vaultdevelopmentagency@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Middle Georgia', addressRegion: 'GA', addressCountry: 'US' },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
            },
          })}
        </script>
      </Helmet>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk."
        lead="Tell us about your project and we'll get back to you within 24 hours. No pressure, no commitment."
      />
      <section className="sec wrap">
        <div className="contact-grid">
          <Reveal>
            <h2 style={{ fontSize: 'clamp(34px, 4vw, 60px)' }}>Let&apos;s build something great.</h2>
            <dl className="contact-info" style={{ marginTop: 40 }}>
              <div>
                <dt className="mono">Location</dt>
                <dd>Middle Georgia<br />Serving clients nationwide</dd>
              </div>
              <div>
                <dt className="mono">Email</dt>
                <dd><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd>
              </div>
              <div>
                <dt className="mono">Phone</dt>
                <dd><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></dd>
              </div>
              <div>
                <dt className="mono">Response time</dt>
                <dd>Within 24 hours on business days</dd>
              </div>
            </dl>
            <FounderNote className="note-side">
              I read every message myself and reply within 24 hours on business days.
            </FounderNote>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="sent" role="status">
                <span className="check" aria-hidden="true">✓</span>
                <h2 style={{ fontSize: 'clamp(30px, 3vw, 44px)' }}>Message Sent!</h2>
                <p className="muted" style={{ margin: 0 }}>Thanks for reaching out. We&apos;ll be in touch within 24 hours.</p>
                <Link className="btn" to="/">Back to Home</Link>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div>
                  <span className="mono muted">Send a message</span>
                  <p className="muted" style={{ margin: '8px 0 0' }}>Fields marked * are required.</p>
                </div>
                <div className="two">
                  <div className="field">
                    <label htmlFor="fn">First Name *</label>
                    <input id="fn" type="text" autoComplete="given-name" placeholder="John" value={values.fn} onChange={set('fn')} />
                  </div>
                  <div className="field">
                    <label htmlFor="ln">Last Name</label>
                    <input id="ln" type="text" autoComplete="family-name" placeholder="Smith" value={values.ln} onChange={set('ln')} />
                  </div>
                </div>
                <div className="two">
                  <div className="field">
                    <label htmlFor="em">Email Address *</label>
                    <input id="em" type="email" autoComplete="email" placeholder="john@yourbusiness.com" value={values.em} onChange={set('em')} />
                  </div>
                  <div className="field">
                    <label htmlFor="ph">Phone Number</label>
                    <input id="ph" type="tel" autoComplete="tel" placeholder="(555) 000-0000" value={values.ph} onChange={set('ph')} />
                  </div>
                </div>
                <div className="two">
                  <div className="field">
                    <label htmlFor="bz">Business Name</label>
                    <input id="bz" type="text" autoComplete="organization" placeholder="Your Business LLC" value={values.bz} onChange={set('bz')} />
                  </div>
                  <div className="field">
                    <label htmlFor="sv">Service Needed *</label>
                    <select id="sv" value={values.sv} onChange={set('sv')}>
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="ms">Tell Us About Your Project *</label>
                  <textarea
                    id="ms"
                    rows={5}
                    placeholder="Describe your project, goals, timeline, or anything else that helps us understand what you need..."
                    value={values.ms}
                    onChange={set('ms')}
                  />
                </div>

                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <input type="text" id="_hp" name="website" tabIndex={-1} autoComplete="off" value={values._hp} onChange={set('_hp')} />
                </div>

                {error && <p className="form-error" role="alert">{error}</p>}

                <button type="submit" className="btn-arrow" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'} <b aria-hidden="true">→</b>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
