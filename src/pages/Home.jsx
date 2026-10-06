import { Helmet } from 'react-helmet-async'
import { TESTIMONIALS } from '@/data/testimonials'
import { Hero } from './home/Hero'
import { AboutStrip } from './home/AboutStrip'
import { Services } from './home/Services'
import { Approach } from './home/Approach'
import { Numbers } from './home/Numbers'
import { Work } from './home/Work'
import { Compare } from './home/Compare'
import { Pricing } from './home/Pricing'
import { Reviews } from './home/Reviews'
import { FaqMini } from './home/FaqMini'
import { CtaSection } from '@/components/sections/CtaSection'

const avgRating = (TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length).toFixed(1)

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://vaultwebsiteagency.com/#business',
      name: 'Vault Development',
      description:
        'Custom websites, AI solutions, and software development for businesses nationwide. Based in Middle Georgia.',
      url: 'https://vaultwebsiteagency.com',
      telephone: '+16787556900',
      email: 'vaultdevelopmentagency@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Middle Georgia',
        addressRegion: 'GA',
        addressCountry: 'US',
      },
      priceRange: '$$',
      serviceArea: { '@type': 'Country', name: 'United States' },
      sameAs: ['https://www.instagram.com/vaultdevelopment', 'https://www.facebook.com/share/1DzY5gekXH/'],
      founder: { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
      employee: [
        { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
        { '@type': 'Person', name: 'Ryan Grant', jobTitle: 'Digital Marketing Specialist' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: avgRating,
        reviewCount: TESTIMONIALS.length,
        bestRating: '5',
        worstRating: '1',
      },
      review: TESTIMONIALS.map((t) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: t.name },
        reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: '5' },
        reviewBody: t.body,
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Design & Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Implementation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Maintenance & Support' } },
        ],
      },
    },
    { '@type': 'WebSite', name: 'Vault Development', url: 'https://vaultwebsiteagency.com' },
  ],
}

export function Home() {
  return (
    <>
      <Helmet>
        <title>Web Design & AI Development Agency | Vault Development | Middle Georgia</title>
        <meta
          name="description"
          content="Vault Development — Custom websites, AI solutions, and software development for businesses nationwide. Based in Middle Georgia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vault Development" />
        <meta property="og:title" content="Vault Development | Custom Websites & AI Solutions" />
        <meta
          property="og:description"
          content="Custom websites, AI solutions, and software development for businesses of all sizes. 100% custom built. Serving nationwide."
        />
        <meta property="og:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <meta property="og:url" content="https://vaultwebsiteagency.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vault Development | Custom Websites & AI Solutions" />
        <meta
          name="twitter:description"
          content="Custom websites, AI solutions, and software development for businesses of all sizes. 100% custom built. Serving nationwide."
        />
        <meta name="twitter:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <link rel="canonical" href="https://vaultwebsiteagency.com/" />
        <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
      </Helmet>
      <Hero />
      <AboutStrip />
      <Services />
      <Approach />
      <Numbers />
      <Work />
      <Compare />
      <Pricing />
      <Reviews />
      <FaqMini />
      <CtaSection />
    </>
  )
}
