import { render, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { Seo } from './Seo'

const meta = (sel) => document.head.querySelector(sel)?.getAttribute('content')

test('writes the title, description, canonical and social tags for a route', async () => {
  render(
    <HelmetProvider>
      <Seo title="About | Zunova Digital" description="Who we are." path="/about" jsonLd={{ '@type': 'AboutPage' }} />
    </HelmetProvider>
  )
  await waitFor(() => expect(document.title).toBe('About | Zunova Digital'))
  expect(meta('meta[name="description"]')).toBe('Who we are.')
  expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://zunovadigital.com/about')
  expect(meta('meta[property="og:url"]')).toBe('https://zunovadigital.com/about')
  expect(meta('meta[property="og:title"]')).toBe('About | Zunova Digital')
  expect(meta('meta[property="og:image"]')).toBe('https://zunovadigital.com/og-image.png')
  expect(meta('meta[property="og:image:width"]')).toBe('1200')
  expect(meta('meta[property="og:image:height"]')).toBe('630')
  expect(meta('meta[property="og:image:alt"]')).toBeTruthy()
  expect(meta('meta[name="twitter:card"]')).toBe('summary_large_image')
  expect(meta('meta[name="twitter:title"]')).toBe('About | Zunova Digital')
  expect(document.head.querySelector('script[type="application/ld+json"]').textContent).toContain('AboutPage')
})

test('uses the social override for link previews and the root path for the home page', async () => {
  render(
    <HelmetProvider>
      <Seo title="Search title" description="Search description." path="/" social={{ title: 'Card title', description: 'Card text.' }} />
    </HelmetProvider>
  )
  await waitFor(() => expect(document.title).toBe('Search title'))
  expect(meta('meta[property="og:title"]')).toBe('Card title')
  expect(meta('meta[property="og:description"]')).toBe('Card text.')
  expect(meta('meta[name="twitter:description"]')).toBe('Card text.')
  expect(meta('meta[property="og:url"]')).toBe('https://zunovadigital.com/')
  expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://zunovadigital.com/')
})

test('adds a Home > page breadcrumb when the page names its crumb', async () => {
  render(
    <HelmetProvider>
      <Seo title="FAQ | Zunova Digital" description="Questions." path="/faq" crumb="FAQ" />
    </HelmetProvider>
  )
  await waitFor(() => expect(document.title).toBe('FAQ | Zunova Digital'))
  const scripts = [...document.head.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent))
  const crumbs = scripts.find((s) => s['@type'] === 'BreadcrumbList')
  expect(crumbs.itemListElement.map((i) => i.name)).toEqual(['Home', 'FAQ'])
  expect(crumbs.itemListElement[1].item).toBe('https://zunovadigital.com/faq')
})
