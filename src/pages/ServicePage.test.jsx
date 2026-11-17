import { render, screen, within } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ServicePage } from './ServicePage'
import { SERVICE_PAGES } from '@/data/services'

function setup(path) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  )
}

test('every service page renders its heading, deliverables, questions and the other services', () => {
  SERVICE_PAGES.forEach((page) => {
    const { unmount } = setup(`/services/${page.slug}`)
    expect(screen.getByRole('heading', { level: 1, name: page.title })).toBeInTheDocument()
    page.includes.forEach((x) => expect(screen.getByRole('heading', { name: x.title })).toBeInTheDocument())
    page.faq.forEach((f) => expect(screen.getByText(f.q)).toBeInTheDocument())
    const others = screen.getByRole('navigation', { name: 'Other services' })
    expect(within(others).getAllByRole('link')).toHaveLength(SERVICE_PAGES.length - 1)
    expect(within(others).queryByRole('link', { name: page.title })).toBeNull()
    unmount()
  })
})

test('shows related projects only when the service has them', () => {
  setup('/services/ai-implementation')
  expect(screen.getByRole('heading', { name: 'LeadEngine' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'CertTracker' })).toBeInTheDocument()
})

test('an unknown slug renders the not-found page', () => {
  setup('/services/nope')
  expect(screen.getByRole('heading', { level: 1, name: 'Lost in space.' })).toBeInTheDocument()
})
