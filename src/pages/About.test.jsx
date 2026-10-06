import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { About } from './About'
import { HIGHLIGHTS, TEAM, VALUES } from '@/data/site'

function setup() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <About />
      </MemoryRouter>
    </HelmetProvider>
  )
}

test('renders the hero, the team and every highlight', () => {
  setup()
  expect(screen.getByRole('heading', { level: 1, name: 'Built different.' })).toBeInTheDocument()
  TEAM.forEach((m) => expect(screen.getByRole('heading', { name: m.name })).toBeInTheDocument())
  HIGHLIGHTS.forEach((h) => expect(screen.getByRole('heading', { name: h.title })).toBeInTheDocument())
})

test('renders all 6 values', () => {
  setup()
  expect(VALUES).toHaveLength(6)
  VALUES.forEach((v) => expect(screen.getByRole('heading', { name: v.title })).toBeInTheDocument())
})
