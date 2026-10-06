import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Privacy } from './Privacy'

test('renders the heading and key sections', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Privacy />
      </MemoryRouter>
    </HelmetProvider>
  )
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Privacy Policy')
  ;['Information we collect', 'Cookies', 'Your rights', 'Contact us'].forEach((h) => {
    expect(screen.getByText(h)).toBeInTheDocument()
  })
  expect(screen.getAllByText(/Plausible Analytics/).length).toBeGreaterThan(0)
  expect(screen.getByText(/Formspree/)).toBeInTheDocument()
})
