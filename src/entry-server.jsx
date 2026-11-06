import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { AppRoutes } from './App'
import { ROUTER_FUTURE } from './lib/router'

/** Renders one route to HTML plus its <head> tags. Used by scripts/prerender.mjs at build time. */
export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url} basename={import.meta.env.BASE_URL} future={ROUTER_FUTURE}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  )
  const { helmet } = helmetContext
  const head = ['title', 'meta', 'link', 'script'].map((k) => helmet[k].toString()).join('\n    ')
  return { html, head }
}
