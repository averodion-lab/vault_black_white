import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { ServicePage } from '@/pages/ServicePage'
import { Portfolio } from '@/pages/Portfolio'
import { About } from '@/pages/About'
import { FAQ } from '@/pages/FAQ'
import { Contact } from '@/pages/Contact'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'
import { Accessibility } from '@/pages/Accessibility'
import { NotFound } from '@/pages/NotFound'

/** The route table, shared by the browser app and the build-time prerenderer. */
export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  )
}
