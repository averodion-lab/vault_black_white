import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Portfolio } from './Portfolio'
import { PROJECTS } from '@/data/site'

test('renders the hero and all 6 case studies', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    </HelmetProvider>
  )
  expect(screen.getByRole('heading', { level: 1, name: 'Portfolio' })).toBeInTheDocument()
  expect(PROJECTS).toHaveLength(6)
  PROJECTS.forEach((p) => {
    expect(screen.getByRole('heading', { name: p.title })).toBeInTheDocument()
    expect(screen.getByAltText(p.alt)).toHaveAttribute('src', p.img)
  })
})

test('live projects link out in a new tab', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    </HelmetProvider>
  )
  const live = PROJECTS.filter((p) => p.href)
  live.forEach((p) => {
    const link = screen.getByRole('link', { name: `Visit ${p.title} (opens in a new tab)` })
    expect(link).toHaveAttribute('href', p.href)
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
