import { Helmet } from 'react-helmet-async'

export const SITE_URL = 'https://zunovadigital.com'
export const SITE_NAME = 'Zunova Digital'
const OG_IMAGE = `${SITE_URL}/og-image.png`
const OG_IMAGE_ALT = 'Zunova Digital — web design and AI development agency'

/**
 * The head tags every indexable page needs: title, description, canonical URL,
 * Open Graph and Twitter cards, and optional JSON-LD structured data.
 *
 * `path` is the route ("/" or "/about"); the canonical and og:url are built from it so they never drift.
 * `social` overrides the title/description used in link previews when the search title is too long for a card.
 * `crumb` is the page's name in the breadcrumb (Home > crumb); nested pages pass `crumbs` as [{ name, path }] instead.
 */
export function Seo({ title, description, path, social = {}, jsonLd, crumb, crumbs }) {
  const url = SITE_URL + path
  const trail = crumbs || (crumb && [{ name: crumb, path }])
  const breadcrumb = trail && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: SITE_URL + c.path,
    })),
  }
  const socialTitle = social.title || title
  const socialDescription = social.description || description
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      {breadcrumb && <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>}
    </Helmet>
  )
}
