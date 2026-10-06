import { Outlet } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'
import { Footer } from './Footer'
import { SmoothScroll } from './SmoothScroll'

export function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <SmoothScroll />
      <SiteHeader />
      <div className="page-grain" aria-hidden="true" />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
