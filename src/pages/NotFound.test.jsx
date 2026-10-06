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
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/page not found/i)
  expect(screen.getByText(/back to home/i)).toHaveAttribute('href', '/')
  ;['Portfolio', 'About', 'Contact'].forEach((label) => {
    expect(screen.getByText(label)).toHaveAttribute('href', `/${label.toLowerCase()}`)
  })
})
