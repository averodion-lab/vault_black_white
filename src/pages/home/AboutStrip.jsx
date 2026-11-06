import { Reveal } from '@/components/ui/Reveal'
import { Team } from '@/components/sections/Team'
import { Stats } from '@/components/sections/Stats'

export function AboutStrip() {
  return (
    <section className="sec wrap" id="about">
      <div className="about-grid">
        <Reveal as="p" className="about-lede">
          Zunova Digital is a web design and AI technology company. <em>We&apos;re not a template shop.</em> Everything we
          build is custom, intentional, and designed to get results.
        </Reveal>
        <Reveal className="about-side" delay={90}>
          <span className="mono">Who we are</span>
          <p>Based in Atlanta, Georgia, we work with businesses of all sizes nationwide, from local shops to commercial enterprises.</p>
          <a className="link-arrow" href="#team">Meet the team <span>→</span></a>
        </Reveal>
      </div>
      <Stats />
      <Team />
    </section>
  )
}
