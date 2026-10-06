import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Home } from './Home'
import { TESTIMONIALS } from '@/data/testimonials'

function setup() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </HelmetProvider>
  )
}

test('renders the hero with the wordmark, tagline and quote CTA', () => {
  setup()
  expect(screen.getByRole('heading', { level: 1, name: 'Vault' })).toBeInTheDocument()
  expect(screen.getByText('Websites That Bring You Customers')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /get a free quote/i })).toHaveAttribute('href', '/contact')
  const svc = screen.getByRole('list', { name: 'What we build' })
  expect(within(svc).getAllByRole('listitem')).toHaveLength(4)
})

test('renders every homepage section', () => {
  setup()
  ;[
    "Who you'll work with",
    'Custom services for your business',
    'From first call to launch day',
    "What we've built so far",
    'Built for real businesses',
    'Vault vs. the rest',
    'Every project is custom-quoted',
    'What our clients say',
    'Quick answers',
    "Let's build something great.",
  ].forEach((name) => expect(screen.getByRole('heading', { name })).toBeInTheDocument())
})

test('shows both team members with photos', () => {
  setup()
  expect(screen.getByAltText('Rodion Averianov')).toHaveAttribute('src', '/assets/images/team-rodion-averianov.jpg')
  expect(screen.getByAltText('Ryan Grant')).toHaveAttribute('src', '/assets/images/team-ryan-grant.jpg')
})

test('marks the example numbers so they are not mistaken for real data', () => {
  setup()
  expect(screen.getByText(/example numbers · replace before launch/i)).toBeInTheDocument()
})

test('renders every review', () => {
  setup()
  TESTIMONIALS.forEach((t) => expect(screen.getAllByText(t.name).length).toBeGreaterThan(0))
})

test('the comparison table has 8 feature rows', () => {
  setup()
  const table = screen.getByRole('table')
  expect(within(table).getAllByRole('row')).toHaveLength(9)
})
