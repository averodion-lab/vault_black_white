import { Link, useParams } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/sections/PageHero'
import { FaqList } from '@/components/sections/FaqList'
import { FounderNote } from '@/components/sections/FounderNote'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'
import { PROJECTS } from '@/data/site'
import { SERVICE_PAGES, servicePage } from '@/data/services'
import { NotFound } from './NotFound'

/** One landing page per service, driven by src/data/services.js. */
export function ServicePage() {
  const { slug } = useParams()
  const page = servicePage(slug)
  if (!page) return <NotFound />

  const index = SERVICE_PAGES.indexOf(page)
  const path = `/services/${page.slug}`
  const projects = PROJECTS.filter((p) => page.projects.includes(p.title))
  const others = SERVICE_PAGES.filter((s) => s.slug !== page.slug)

  return (
    <>
      <Seo
        title={page.seoTitle}
        description={page.description}
        path={path}
        social={{ title: `${page.title} | Zunova Digital` }}
        crumbs={[{ name: 'Services', path: '/services' }, { name: page.title, path }]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `https://zunovadigital.com${path}#service`,
              name: page.title,
              serviceType: page.short,
              description: page.description,
              url: `https://zunovadigital.com${path}`,
              provider: { '@id': 'https://zunovadigital.com/#business' },
              areaServed: [{ '@type': 'State', name: 'Georgia' }, { '@type': 'Country', name: 'United States' }],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: `${page.title} includes`,
                itemListElement: page.includes.map((x) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: x.title, description: x.body } })),
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: page.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
            },
          ],
        }}
      />
      <PageHero eyebrow={`Services / ${String(index + 1).padStart(2, '0')}`} title={page.title} lead={page.lead} />

      <section className="sec wrap paper">
        <Reveal className="sec-head">
          <span className="mono">What&apos;s included</span>
          <h2>{page.headline}</h2>
        </Reveal>
        <div className="grid-list">
          {page.includes.map((x, i) => (
            <Reveal key={x.title} delay={(i % 3) * 80}>
              <h3>{x.title}</h3>
              <p>{x.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec wrap svc-intro">
        <h2 className="sr-only">About this service</h2>
        <div className="story" style={{ marginTop: 0 }}>
          <Reveal>
            {page.intro.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
            <Link className="btn-arrow" to="/contact" style={{ marginTop: 16 }}>
              Get a free quote <b aria-hidden="true">→</b>
            </Link>
          </Reveal>
          <Reveal delay={90}>
            <FounderNote className="note-side">{page.note}</FounderNote>
          </Reveal>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="sec wrap">
          <Reveal className="sec-head">
            <span className="mono">Related work</span>
            <h2>Built with this service</h2>
          </Reveal>
          <div className={`work teaser${projects.length === 2 ? ' two' : ''}`}>
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.title} project={p} short delay={i * 90} />
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <Link className="link-arrow" to="/portfolio">View all work <span>→</span></Link>
          </div>
        </section>
      )}

      <section className="sec wrap paper">
        <div className="faq-grid">
          <Reveal>
            <span className="mono">Questions</span>
            <h2 style={{ marginTop: 14 }}>Before you ask</h2>
            <p className="muted" style={{ marginTop: 20, maxWidth: '36ch' }}>
              More answers on the <Link to="/faq" className="underline">FAQ page</Link>, or call us at any time.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <FaqList items={page.faq} openFirst />
          </Reveal>
        </div>
      </section>

      <section className="wrap other-svcs">
        <nav aria-label="Other services">
          <span className="mono">Other services</span>
          <ul>
            {others.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  )
}
