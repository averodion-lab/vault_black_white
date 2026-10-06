import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Check } from 'lucide-react'
import { GradientButton } from '@/components/ui/GradientButton'
import { Reveal } from '@/components/ui/Reveal'
import { PlasmaBackground } from '@/components/ui/PlasmaBackground'
import { Typewriter } from '@/components/ui/Typewriter'
import { TypewriterHeadline } from '@/components/ui/TypewriterHeadline'

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

      <section className="relative overflow-hidden px-6 py-24">
        <PlasmaBackground className="pointer-events-none absolute inset-0 h-full w-full" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,7,12,0.05)_0%,rgba(7,7,12,0.55)_85%)]"
        />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <Reveal>
          <Typewriter text="Get In Touch" className="text-xs uppercase tracking-[0.3em] text-muted" />
          <TypewriterHeadline
            as="h1"
            className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl"
            segments={[
              { text: "LET'S BUILD" },
              { break: true },
              { text: 'SOMETHING', className: 'text-glass-border2' },
              { break: true },
              { text: 'GREAT.' },
            ]}
          />
          <p className="mt-6 max-w-md text-lg text-muted">
            Tell us about your project and we&apos;ll get back to you within 24 hours. No pressure, no commitment —
            just a real conversation.
          </p>
          <dl className="mt-8 flex flex-col gap-6">
            <div>
              <dt className="text-sm uppercase tracking-widest text-glass-border2">Location</dt>
              <dd className="mt-1 text-xl text-muted">
                Middle Georgia
                <br />
                Serving clients nationwide
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest text-glass-border2">Email</dt>
              <dd className="mt-1 text-xl">
                <a href="mailto:vaultdevelopmentagency@gmail.com" className="text-glass-border3">
                  vaultdevelopmentagency@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest text-glass-border2">Phone</dt>
              <dd className="mt-1 text-xl">
                <a href="tel:6787556900" className="text-glass-border3">
                  678-755-6900
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest text-glass-border2">Response Time</dt>
              <dd className="mt-1 text-xl text-muted">Within 24 hours on business days</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={150} className="rounded-xl border border-white/10 bg-base/80 p-6 backdrop-blur-sm">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <Check className="text-glass-border3" size={40} />
              <h2 className="font-display text-xl text-ink">Message Sent!</h2>
              <p className="text-lg text-muted">Thanks for reaching out. We&apos;ll be in touch within 24 hours.</p>
              <GradientButton to="/" className="mt-2">
                Back to Home
              </GradientButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="font-display text-xl text-ink">Send a Message</h2>
              <p className="mt-1 text-lg text-muted">We&apos;ll review your details and reach out shortly.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fn" className="text-xs text-muted">
                    First Name *
                  </label>
                  <input
                    id="fn"
                    type="text"
                    placeholder="John"
                    value={values.fn}
                    onChange={set('fn')}
                    className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-ink"
                  />
                </div>
                <div>
                  <label htmlFor="ln" className="text-xs text-muted">
                    Last Name
                  </label>
                  <input
                    id="ln"
                    type="text"
                    placeholder="Smith"
                    value={values.ln}
                    onChange={set('ln')}
                    className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-ink"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="em" className="text-xs text-muted">
                  Email Address *
                </label>
                <input
                  id="em"
                  type="email"
                  placeholder="john@yourbusiness.com"
                  value={values.em}
                  onChange={set('em')}
                  className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-ink"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="ph" className="text-xs text-muted">
                  Phone Number
                </label>
                <input
                  id="ph"
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={values.ph}
                  onChange={set('ph')}
                  className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-ink"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="bz" className="text-xs text-muted">
                  Business Name
                </label>
                <input
                  id="bz"
                  type="text"
                  placeholder="Your Business LLC"
                  value={values.bz}
                  onChange={set('bz')}
                  className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-ink"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="sv" className="text-xs text-muted">
                  Service Needed *
                </label>
                <select
                  id="sv"
                  value={values.sv}
                  onChange={set('sv')}
                  className="mt-1 w-full rounded-md border border-white/10 bg-base px-3 py-2 text-ink"
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="ms" className="text-xs text-muted">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="ms"
                  rows={4}
                  placeholder="Describe your project, goals, timeline, or anything else that helps us understand what you need..."
                  value={values.ms}
                  onChange={set('ms')}
                  className="mt-1 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-ink"
                />
              </div>

              <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                <input
                  type="text"
                  id="_hp"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values._hp}
                  onChange={set('_hp')}
                />
              </div>

              {error && <p className="mt-4 text-sm text-glass-border2" role="alert">{error}</p>}

              <button
                type="submit"
                disabled={sending}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-glass-border1 via-glass-border2 to-glass-border3 px-6 py-3 font-body text-sm font-semibold text-base transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </Reveal>
        </div>
      </section>
    </>
  )
}
