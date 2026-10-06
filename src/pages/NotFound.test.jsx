import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { NotFound } from './NotFound'

test('renders a heading, a link home, and quick links', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </HelmetProvider>
  )
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Locked.')
  expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/')
  ;['Portfolio', 'About', 'Contact'].forEach((l) => expect(screen.getByRole('link', { name: l })).toBeInTheDocument())
})
