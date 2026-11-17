import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { AppRoutes } from './App'
import { SERVICE_PAGES } from './data/services'

/** Service landing page slugs, so the prerenderer knows every /services/<slug> route. */
export const SERVICE_SLUGS = SERVICE_PAGES.map((s) => s.slug)

/** Renders one route to HTML plus its <head> tags. Used by scripts/prerender.mjs at build time. */
export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url} basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  )
  const { helmet } = helmetContext
  const head = ['title', 'meta', 'link', 'script'].map((k) => helmet[k].toString()).join('\n    ')
  return { html, head }
}
