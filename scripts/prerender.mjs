// Writes a fully rendered HTML file per route into dist/, so crawlers and link previews
// see real content and meta tags without running JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '')
const { render, SERVICE_SLUGS } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const ROUTES = [
  '/', '/services', ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
  '/portfolio', '/about', '/faq', '/contact', '/privacy', '/terms', '/accessibility',
]
const SITE_URL = 'https://zunovadigital.com'
// How often each page tends to change, for the sitemap
const CHANGE = { '/': 'weekly', '/portfolio': 'monthly', '/privacy': 'yearly', '/terms': 'yearly', '/accessibility': 'yearly' }
const PRIORITY = { '/': '1.0', '/services': '0.9', '/portfolio': '0.8', '/contact': '0.8', '/about': '0.7', '/faq': '0.6' }
const priority = (url) => PRIORITY[url] || (url.startsWith('/services/') ? '0.8' : '0.3')

function sitemap() {
  const today = new Date().toISOString().slice(0, 10)
  const urls = ROUTES.map((url) =>
    [
      '  <url>',
      `    <loc>${SITE_URL}${url}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${CHANGE[url] || 'monthly'}</changefreq>`,
      `    <priority>${priority(url)}</priority>`,
      '  </url>',
    ].join('\n')
  )
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

function page(url) {
  const { html, head } = render(base + url)
  return template
    .replace(/<title>.*?<\/title>/s, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

for (const url of ROUTES) {
  const out = page(url)
  if (url === '/') {
    fs.writeFileSync(path.join(dist, 'index.html'), out)
  } else {
    const name = url.slice(1)
    // dir/index.html for GitHub Pages; name.html for Apache (see public/.htaccess). Nested routes make nested dirs.
    fs.mkdirSync(path.join(dist, name), { recursive: true })
    fs.writeFileSync(path.join(dist, name, 'index.html'), out)
    fs.writeFileSync(path.join(dist, `${name}.html`), out)
  }
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'))
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap())
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerendered ${ROUTES.length} routes + 404, wrote sitemap.xml`)
