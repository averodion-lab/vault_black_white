import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { Team } from '@/components/sections/Team'
import { STATS } from '@/data/site'

export function AboutStrip() {
  return (
    <section className="sec wrap" id="about">
      <div className="about-grid">
        <Reveal as="p" className="about-lede">
          Vault Development is a web design and AI technology company. <em>We&apos;re not a template shop.</em> Everything we
          build is custom, intentional, and designed to get results.
        </Reveal>
        <Reveal className="about-side" delay={90}>
          <span className="mono">Who we are</span>
          <p>Based in Middle Georgia, we work with businesses of all sizes nationwide, from local shops to commercial enterprises.</p>
          <a className="link-arrow" href="#team">Meet the team <span>→</span></a>
        </Reveal>
      </div>
      <div className="stats">
        {STATS.map((s, i) => (
          <Reveal className="stat" key={`${s.l}-${i}`} delay={i * 80}>
            <CountUp value={s.n} />
            <span className="mono muted">{s.l}</span>
          </Reveal>
        ))}
      </div>
      <Team />
    </section>
  )
}
