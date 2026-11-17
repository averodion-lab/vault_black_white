import { Seo } from '@/components/seo/Seo'
import { Hero } from './home/Hero'
import { AboutStrip } from './home/AboutStrip'
import { Services } from './home/Services'
import { Journey } from './home/Journey'
import { Approach } from './home/Approach'
import { Numbers } from './home/Numbers'
import { Work } from './home/Work'
import { Compare } from './home/Compare'
import { Pricing } from './home/Pricing'
import { Reviews } from './home/Reviews'
import { FaqMini } from './home/FaqMini'

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://zunovadigital.com/#business',
      name: 'Zunova Digital',
      description:
        'Custom websites, AI solutions, and software development for businesses nationwide. Based in Atlanta, Georgia.',
      url: 'https://zunovadigital.com',
      telephone: '+16787556900',
      email: 'vaultdevelopmentagency@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Atlanta',
        addressRegion: 'GA',
        addressCountry: 'US',
      },
      priceRange: '$$',
      areaServed: [{ '@type': 'State', name: 'Georgia' }, { '@type': 'Country', name: 'United States' }],
      image: 'https://zunovadigital.com/og-image.png',
      logo: 'https://zunovadigital.com/favicon.svg',
      sameAs: ['https://www.instagram.com/vaultdevelopment', 'https://www.facebook.com/share/1DzY5gekXH/'],
      founder: { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
      employee: [
        { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
        { '@type': 'Person', name: 'Ryan Grant', jobTitle: 'Digital Marketing Specialist' },
      ],
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
    { '@type': 'WebSite', name: 'Zunova Digital', url: 'https://zunovadigital.com/', publisher: { '@id': 'https://zunovadigital.com/#business' } },
  ],
}

export function Home() {
  return (
    <>
      <Seo
        title="Web Design & AI Development Agency | Zunova Digital"
        description="Zunova Digital builds custom websites, AI solutions, and software for businesses nationwide. Based in Atlanta, Georgia. 100% custom built."
        path="/"
        social={{ title: 'Zunova Digital | Custom Websites & AI Solutions', description: 'Custom websites, AI solutions, and software development for businesses of all sizes. 100% custom built. Serving nationwide.' }}
        jsonLd={JSON_LD}
      />
      <Hero />
      <AboutStrip />
      <Services />
      <Journey />
      <Approach />
      <Numbers />
      <Work />
      <Compare />
      <Pricing />
      <Reviews />
      <FaqMini />
    </>
  )
}
