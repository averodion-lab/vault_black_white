// Writes a fully rendered HTML file per route into dist/, so crawlers and link previews
// see real content and meta tags without running JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '')
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
// Keep an unrendered copy for routes that only redirect on the client
fs.writeFileSync(path.join(dist, 'shell.html'), template)

const ROUTES = ['/', '/portfolio', '/about', '/faq', '/contact', '/privacy', '/terms']

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
    // dir/index.html for GitHub Pages; name.html for Apache (see public/.htaccess)
    fs.mkdirSync(path.join(dist, name), { recursive: true })
    fs.writeFileSync(path.join(dist, name, 'index.html'), out)
    fs.writeFileSync(path.join(dist, `${name}.html`), out)
  }
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'))
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerendered ${ROUTES.length} routes + 404`)
