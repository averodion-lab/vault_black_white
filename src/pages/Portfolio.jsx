import { Helmet } from 'react-helmet-async'
import { PageHero } from '@/components/sections/PageHero'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { FounderNote } from '@/components/sections/FounderNote'
import { PROJECTS } from '@/data/site'

export function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Our Work | Portfolio | Zunova Digital</title>
        <meta
          name="description"
          content="See the work Zunova Digital has delivered — custom websites, AI systems, and digital products for real businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zunova Digital" />
        <meta property="og:title" content="Our Work | Portfolio | Zunova Digital" />
        <meta
          property="og:description"
          content="See the work Zunova Digital has delivered — custom websites, AI systems, and digital products for real businesses."
        />
        <meta property="og:image" content="https://zunovadigital.com/og-image.png" />
        <meta property="og:url" content="https://zunovadigital.com/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Work | Portfolio | Zunova Digital" />
        <meta
          name="twitter:description"
          content="See the work Zunova Digital has delivered — custom websites, AI systems, and digital products for real businesses."
        />
        <meta name="twitter:image" content="https://zunovadigital.com/og-image.png" />
        <link rel="canonical" href="https://zunovadigital.com/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Portfolio | Zunova Digital',
            description: 'A showcase of custom websites, AI systems, and digital products built by Zunova Digital for real businesses.',
            url: 'https://zunovadigital.com/portfolio',
            provider: { '@type': 'LocalBusiness', name: 'Zunova Digital', '@id': 'https://zunovadigital.com/#business' },
            hasPart: [
              { '@type': 'CreativeWork', name: 'LeadEngine', description: 'AI-powered lead management system for home service companies with automated SMS, email, and voicemail follow-ups.' },
              { '@type': 'CreativeWork', name: 'Ramzef Construction', description: 'Custom website for a construction company showcasing services and driving local leads.' },
              { '@type': 'CreativeWork', name: 'Tower Tigers Crew LLC', description: 'Professional web presence for a telecom services company.' },
              { '@type': 'CreativeWork', name: 'Trusted Roofing', description: 'Lead generation website for a roofing contractor.' },
              { '@type': 'CreativeWork', name: 'Seva Photos', description: 'Portfolio and booking website for a professional photography business.' },
              { '@type': 'CreativeWork', name: "Jacey's Moving & Junk Removal", description: 'Bold, trust-first website for an Atlanta moving and junk removal company.' },
            ],
          })}
        </script>
      </Helmet>
      <PageHero
        eyebrow="Our work"
        title="Portfolio"
        lead="Custom websites, AI systems, and digital products built for real businesses."
      />
      <section className="sec wrap">
        <h2 className="sr-only">Projects</h2>
        <FounderNote className="note-intro">
          Every project here was custom-built for a real business. Ask me about any of them and I&apos;ll walk you
          through how we did it.
        </FounderNote>
        <div className="work full">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={(i % 2) * 90} />
          ))}
        </div>
      </section>
    </>
  )
}
