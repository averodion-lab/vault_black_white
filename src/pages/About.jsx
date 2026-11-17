import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/sections/PageHero'
import { Team } from '@/components/sections/Team'
import { Reveal } from '@/components/ui/Reveal'
import { asset } from '@/lib/utils'
import { IsoIcon } from '@/components/ui/IsoIcon'
import { isoIcon } from '@/lib/isoIcons'
import { HIGHLIGHTS, VALUES } from '@/data/site'
import { Stats } from '@/components/sections/Stats'

export function About() {
  return (
    <>
      <Seo
        title="About Zunova Digital | Custom Web Design & AI Agency"
        description="Zunova Digital is a web design and AI company in Atlanta, Georgia, built to help businesses compete and grow online. 50+ clients helped."
        path="/about"
        crumb="About"
        social={{ title: 'About | Zunova Digital', description: 'A web design and AI technology company built to help local and commercial businesses compete and grow in the digital world.' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Zunova Digital',
          description: 'Zunova Digital is a web design and AI technology company built to help businesses compete and grow online. Based in Atlanta, Georgia, serving clients nationwide.',
          url: 'https://zunovadigital.com/about',
          mainEntity: {
            '@type': 'LocalBusiness',
            '@id': 'https://zunovadigital.com/#business',
            name: 'Zunova Digital',
            foundingLocation: 'Atlanta, Georgia',
            description: 'Custom websites, AI solutions, and software development for businesses nationwide.',
            telephone: '+16787556900',
            email: 'vaultdevelopmentagency@gmail.com',
            address: { '@type': 'PostalAddress', addressLocality: 'Atlanta', addressRegion: 'GA', addressCountry: 'US' },
            founder: { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
            employee: [
              { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
              { '@type': 'Person', name: 'Ryan Grant', jobTitle: 'Digital Marketing Specialist' },
            ],
          },
        }}
      />
      <PageHero
        eyebrow="About us"
        title="Built different."
        lead="A web design and AI technology company built to help local and commercial businesses compete and grow online."
      />

      <section className="sec wrap paper">
        <h2 className="sr-only">Our story</h2>
        <Reveal as="blockquote" className="quote">
          “Every business deserves a digital presence that <em>actually works</em> for them.”
        </Reveal>
        <div className="story">
          <Reveal>
            <p>
              Zunova Digital was founded with a simple belief: every business deserves a website and digital presence
              that truly works for them. Not just something that looks nice, but something that actually drives growth.
            </p>
            <p>
              We&apos;re based in Atlanta, Georgia, and we work with clients nationwide, bringing local dedication and
              modern technology to every project we take on.
            </p>
            <figure className="frame story-shot">
              <div className="photo">
                <img
                  src={asset('/assets/images/app-development-phone.webp')}
                  alt="A custom app built by Zunova Digital shown on a phone"
                  width="1487"
                  height="1058"
                  loading="lazy"
                />
              </div>
              <figcaption className="plate">
                <b>App Development</b>
                <span>Built by Zunova</span>
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
        <Stats />
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

    </>
  )
}
