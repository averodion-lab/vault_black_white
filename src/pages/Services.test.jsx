import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Services } from './Services'
import { SERVICE_PAGES } from '@/data/services'

test('lists every service with a link to its page', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    </HelmetProvider>
  )
  expect(screen.getByRole('heading', { level: 1, name: 'What we build.' })).toBeInTheDocument()
  SERVICE_PAGES.forEach((s) => {
    expect(screen.getByRole('link', { name: s.title })).toHaveAttribute('href', `/services/${s.slug}`)
  })
})
