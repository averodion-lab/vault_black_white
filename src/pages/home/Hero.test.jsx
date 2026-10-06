import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Hero } from './Hero'

test('renders the headline and both CTAs', () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  )
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/WEB.*SOFTWARE.*DEVELOPMENT.*AGENCY/s)
  expect(screen.getByRole('link', { name: 'Submit Inquiry' })).toHaveAttribute('href', '/contact')
  expect(screen.getByRole('link', { name: 'View Services' })).toHaveAttribute('href', '#services')
})
