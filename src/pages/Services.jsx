import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/sections/PageHero'
import { FounderNote } from '@/components/sections/FounderNote'
import { Reveal } from '@/components/ui/Reveal'
import { SERVICE_PAGES } from '@/data/services'

/** The services hub: one row per service, linking to its landing page. */
export function Services() {
  return (
    <>
      <Seo
        title="Services | Web, App, Software & AI Development | Zunova Digital"
        description="Custom websites, mobile apps, business software, AI automation, digital marketing, and maintenance from one team in Atlanta, Georgia. Serving nationwide."
        path="/services"
        social={{ title: 'Services | Zunova Digital' }}
        crumb="Services"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Zunova Digital services',
          itemListElement: SERVICE_PAGES.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.title,
            url: `https://zunovadigital.com/services/${s.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Services"
        title="What we build."
        lead="Websites, apps, software, AI, and marketing, built and supported by one team."
      />
      <section className="sec wrap paper">
        <h2 className="sr-only">All services</h2>
        <FounderNote className="note-intro" tone="light">
          Not sure which one you need? Most projects mix two or three. Tell me the problem and I&apos;ll map out the fit.
        </FounderNote>
        <ol className="svc-index">
          {SERVICE_PAGES.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 2) * 80}>
              <span className="mono">/{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3><Link to={`/services/${s.slug}`}>{s.title}</Link></h3>
                <p>{s.lead}</p>
                <Link className="link-arrow" to={`/services/${s.slug}`}>
                  Explore {s.short.toLowerCase()} <span>→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  )
}
