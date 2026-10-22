import { Helmet } from 'react-helmet-async'
import { PageHero } from '@/components/sections/PageHero'
import { Team } from '@/components/sections/Team'
import { CtaSection } from '@/components/sections/CtaSection'
import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { asset } from '@/lib/utils'
import { IsoIcon } from '@/components/ui/IsoIcon'
import { isoIcon } from '@/lib/isoIcons'
import { HIGHLIGHTS, STATS, VALUES } from '@/data/site'

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Custom Web Design Agency | Vault Development | Middle Georgia</title>
        <meta
          name="description"
          content="Learn about Vault Development — a web design and AI company built to help businesses compete and grow online. 50+ clients helped. 100% custom built."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vault Development" />
        <meta property="og:title" content="About | Vault Development" />
        <meta
          property="og:description"
          content="A web design and AI technology company built to help local and commercial businesses compete and grow in the digital world."
        />
        <meta property="og:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <meta property="og:url" content="https://vaultwebsiteagency.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Vault Development" />
        <meta
          name="twitter:description"
          content="A web design and AI technology company built to help local and commercial businesses compete and grow in the digital world."
        />
        <meta name="twitter:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <link rel="canonical" href="https://vaultwebsiteagency.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Vault Development',
            description: 'Vault Development is a web design and AI technology company built to help businesses compete and grow online. Based in Middle Georgia, serving clients nationwide.',
            url: 'https://vaultwebsiteagency.com/about',
            mainEntity: {
              '@type': 'LocalBusiness',
              '@id': 'https://vaultwebsiteagency.com/#business',
              name: 'Vault Development',
              foundingLocation: 'Middle Georgia',
              description: 'Custom websites, AI solutions, and software development for businesses nationwide.',
              telephone: '+16787556900',
              email: 'vaultdevelopmentagency@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Middle Georgia', addressRegion: 'GA', addressCountry: 'US' },
              founder: { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
              employee: [
                { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
                { '@type': 'Person', name: 'Ryan Grant', jobTitle: 'Digital Marketing Specialist' },
              ],
            },
          })}
        </script>
      </Helmet>
      <PageHero
        eyebrow="About us"
        title="Built different."
        lead="A web design and AI technology company built to help local and commercial businesses compete and grow online."
      />

      <section className="sec wrap paper">
        <Reveal as="blockquote" className="quote">
          “Every business deserves a digital presence that <em>actually works</em> for them.”
        </Reveal>
        <div className="story">
          <Reveal>
            <p>
              Vault Development was founded with a simple belief: every business deserves a website and digital presence
              that truly works for them. Not just something that looks nice, but something that actually drives growth.
            </p>
            <p>
              We&apos;re based in Middle Georgia, and we work with clients nationwide, bringing local dedication and
              modern technology to every project we take on.
            </p>
            <figure className="frame story-shot">
              <div className="photo">
                <img
                  src={asset('/assets/images/app-development-phone.webp')}
                  alt="A custom app built by Vault Development shown on a phone"
                  width="1487"
                  height="1058"
                  loading="lazy"
                />
              </div>
              <figcaption className="plate">
                <b>App Development</b>
                <span>Built by Vault</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={90}>
            <p>
              We don&apos;t just build websites. We build tools that help businesses compete, combining clean design with
              modern AI, custom development, and a process built around your goals, not ours.
            </p>
            <div className="grid-list" style={{ gridTemplateColumns: '1fr', marginTop: 28 }}>
              {HIGHLIGHTS.map((x) => (
                <div key={x.title} style={{ paddingLeft: 0, borderLeft: 0 }}>
                  <h3>{x.title}</h3>
                  <p>{x.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec wrap">
        <Team flush />
        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal className="stat" key={`${s.l}-${i}`} delay={i * 80}>
              <CountUp value={s.n} />
              <span className="mono muted">{s.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec wrap paper">
        <Reveal className="sec-head">
          <span className="mono">What we stand for</span>
          <h2>Our values</h2>
        </Reveal>
        <div className="grid-list values">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 80} className="value">
              <IsoIcon id={v.icon} labels={false} className="value-icon" />
              <h3>{v.title}</h3>
              <p>{v.body}</p>
              <ol className="value-tags" aria-hidden="true">
                {isoIcon(v.icon).labels.map((t, j) => (
                  <li key={t} style={{ '--j': j }}>
                    <span>0{j + 1}</span> {t}
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection title="Let's build something together." eyebrow="We'd love to hear about your business" />
    </>
  )
}
