import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Terms } from './Terms'

test('renders the heading and key sections', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Terms />
      </MemoryRouter>
    </HelmetProvider>
  )
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Terms of Service')
  ;['Agreement to terms', 'Intellectual property', 'Governing law', 'Contact us'].forEach((h) => {
    expect(screen.getByText(h)).toBeInTheDocument()
  })
  expect(screen.getByText(/State of Georgia/)).toBeInTheDocument()
})
