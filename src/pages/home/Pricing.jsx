import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { FounderNote } from '@/components/sections/FounderNote'
import { TIERS } from '@/data/site'

export function Pricing() {
  return (
    <section className="sec wrap" id="pricing">
      <Reveal className="sec-head">
        <span className="mono">Investment</span>
        <h2>Every project is custom-quoted</h2>
      </Reveal>
      <div className="tiers">
        {TIERS.map((t, i) => (
          <Reveal className={t.featured ? 'tier feat' : 'tier'} key={t.name} delay={i * 90}>
            <div className="top">
              <h3>{t.name}</h3>
              {t.featured && <span className="badge">Most popular</span>}
            </div>
            <p className="muted">{t.sub}</p>
            <ul>
              {t.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <Link className="btn" to="/contact">Get a quote →</Link>
          </Reveal>
        ))}
      </div>
      <FounderNote className="note-wide">
        I personally lead every build, from the first call to the last line of code. You talk to me directly, and
        nothing ships that I wouldn&apos;t put my own name on.
      </FounderNote>
    </section>
  )
}
