import { Outlet } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'
import { Footer } from './Footer'

export function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
