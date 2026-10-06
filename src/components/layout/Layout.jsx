import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-screen font-body text-ink">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-base transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
