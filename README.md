# Zunova Digital website

Marketing site for Zunova Digital, built with React, Vite and Tailwind.

## Develop

```sh
npm install
npm run dev     # local dev server
npm test        # Vitest suite
npm run lint    # oxlint
npm run build   # production build into dist/
```

## Deploy

Pushes to `black-white-redesign` run `.github/workflows/deploy.yml`, which tests, builds and publishes to GitHub Pages at https://averodion-lab.github.io/vault_black_white/.

The build reads `BASE_PATH` for the subpath; locally it defaults to `/`. Reference files in `public/` through `asset()` from `src/lib/utils.js` so they resolve under either base.

## SEO and headers

Every page sets its head tags through `src/components/seo/Seo.jsx` (title, description, canonical, Open Graph, Twitter card, JSON-LD). `scripts/prerender.mjs` renders each route to static HTML and writes `sitemap.xml` from its route list, so add new routes there. Service landing pages at `/services/<slug>` are driven by `src/data/services.js`: add an entry there and it gets a page, a sitemap line, and a link from the hub, the home services rows, and the footer. Security headers and the HTTPS/www/trailing-slash redirects for the GoDaddy host live in `public/.htaccess`; the Content-Security-Policy there mirrors the meta tag in `index.html`.

## Content

Copy, services, portfolio and team live in `src/data/site.js`; reviews and the Google rating live in `src/data/testimonials.js`.
