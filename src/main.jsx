import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

// A reload always starts at the top of the page: don't restore the old scroll position or jump to a #section.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
const nav = performance.getEntriesByType?.('navigation')[0]
if (nav?.type === 'reload' && window.location.hash) {
  window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search)
}
window.scrollTo(0, 0)

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Pages are prerendered at build time; hydrate them. Fall back to a fresh render for the empty shell.
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
