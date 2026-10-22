# Vault Development website

Marketing site for Vault Development, built with React, Vite and Tailwind.

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

## Content

Copy, services, portfolio and team live in `src/data/site.js`; reviews and the Google rating live in `src/data/testimonials.js`.
