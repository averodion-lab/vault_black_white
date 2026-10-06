import { Helmet } from 'react-helmet-async'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientButton } from '@/components/ui/GradientButton'
import { Reveal } from '@/components/ui/Reveal'
import { PlasmaBackground } from '@/components/ui/PlasmaBackground'
import { Typewriter } from '@/components/ui/Typewriter'
import { TypewriterHeadline } from '@/components/ui/TypewriterHeadline'

const PROJECTS = [
  {
    num: '01',
    img: '/assets/images/leadengine-ai-system.webp',
    alt: 'LeadEngine AI System',
    cat: 'AI Implementation & Web App',
    title: 'LeadEngine',
    body: 'AI-powered lead management system for home service companies. Automated SMS, email, and voicemail follow-ups with pipeline tracking — turning every lead into a booked job.',
    href: 'https://theleadengine.net',
  },
  {
    num: '02',
    img: '/assets/images/ramzef-construction-website.webp',
    alt: 'Ramzef Construction Website',
    cat: 'Web Design & Development',
    title: 'Ramzef Construction',
    body: 'Full custom website for a construction company offering deck building, kitchen remodeling, bathroom renovations, and more. Built to convert local traffic into booked jobs.',
    href: 'https://ramzefconstructionllc.com',
  },
  {
    num: '03',
    img: '/assets/images/tower-tigers-crew-website.webp',
    alt: 'Tower Tigers Crew LLC Website',
    cat: 'Web Design & Development',
    title: 'Tower Tigers Crew LLC',
    body: 'Professional website for a certified telecom tower crew working on AT&T and T-Mobile infrastructure projects nationwide. Built to communicate credibility and attract contracts.',
    href: 'https://towertigers.com',
  },
  {
    num: '04',
    img: '/assets/images/trusted-roofing-website.webp',
    alt: 'Trusted Roofing Website',
    cat: 'Web Design & Development',
    title: 'Trusted Roofing Co.',
    body: 'Clean, conversion-focused website for a roofing services company. Showcases roof installation, repair, and inspection services with a design built to generate local leads.',
    href: null,
  },
  {
    num: '05',
    img: '/assets/images/seva-photos-website.webp',
    alt: 'Seva Photos Website',
    cat: 'Web Design & Development',
    title: 'Seva Photos',
    body: 'Elegant photography portfolio website for Valeria Rudnitckaia. Full-screen imagery, clean navigation, and a refined layout built to showcase professional wedding and portrait photography.',
    href: 'https://seva-photos.com',
  },
  {
    num: '06',
    img: '/assets/images/jaceys-moving-website.webp',
    alt: "Jacey's Moving & Junk Removal Website",
    cat: 'Web Design & Development',
    title: "Jacey's Moving & Junk Removal",
    body: 'Bold, trust-first website for an Atlanta moving and junk removal company. Built to convert with flat-rate pricing, clear service breakdowns, and a straightforward path to a quote.',
    href: null,
  },
]

export function Portfolio() {
  return (
    <>
      <PlasmaBackground className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(7,7,12,0.05)_0%,rgba(7,7,12,0.6)_85%)]"
      />
      <Helmet>
        <title>Our Work | Portfolio | Vault Development</title>
        <meta
          name="description"
          content="See the work Vault Development has delivered — custom websites, AI systems, and digital products for real businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vault Development" />
        <meta property="og:title" content="Our Work | Portfolio | Vault Development" />
        <meta
          property="og:description"
          content="See the work Vault Development has delivered — custom websites, AI systems, and digital products for real businesses."
        />
        <meta property="og:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <meta property="og:url" content="https://vaultwebsiteagency.com/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Work | Portfolio | Vault Development" />
        <meta
          name="twitter:description"
          content="See the work Vault Development has delivered — custom websites, AI systems, and digital products for real businesses."
        />
        <meta name="twitter:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <link rel="canonical" href="https://vaultwebsiteagency.com/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Portfolio | Vault Development',
            description: 'A showcase of custom websites, AI systems, and digital products built by Vault Development for real businesses.',
            url: 'https://vaultwebsiteagency.com/portfolio',
            provider: { '@type': 'LocalBusiness', name: 'Vault Development', '@id': 'https://vaultwebsiteagency.com/#business' },
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

      <section className="px-6 pb-16 pt-24 text-center">
        <Reveal>
          <Typewriter text="Our Work" className="text-xs uppercase tracking-[0.3em] text-muted" />
          <TypewriterHeadline
            as="h1"
            className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-6xl"
            segments={[
              { text: 'REAL PROJECTS.' },
              { break: true },
              {
                text: 'REAL RESULTS.',
                className:
                  'bg-[length:250%_100%] bg-gradient-to-r from-glass-border1 via-glass-border2 to-glass-border3 bg-clip-text text-transparent [animation:shimmer-text_4s_linear_infinite]',
              },
            ]}
          />
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            A look at what we&apos;ve built — custom websites, AI systems, and digital products for businesses across
            the country.
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <GlassCard as="article">
                <div className="overflow-hidden rounded-lg">
                  <img src={p.img} alt={p.alt} loading="lazy" className="aspect-video w-full object-cover" />
                </div>
                <span className="mt-4 block text-xs text-muted">{p.num}</span>
                <span className="mt-1 block text-xs uppercase tracking-widest text-glass-border2">{p.cat}</span>
                <h3 className="mt-1 font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-lg text-muted">{p.body}</p>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-glass-border3"
                  >
                    {p.title} — Visit Site →
                  </a>
                )}
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="px-6 py-16 text-center">
        <h2 className="font-display text-2xl text-ink">Ready to be our next project?</h2>
        <p className="mt-2 text-lg text-muted">Free consultation, no commitment. Let&apos;s build something great.</p>
        <div className="mt-6">
          <GradientButton to="/contact">Get In Touch →</GradientButton>
        </div>
      </Reveal>
    </>
  )
}
