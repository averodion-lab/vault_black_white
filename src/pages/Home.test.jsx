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
  expect(within(svc).getAllByRole('listitem')).toHaveLength(5)
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

test('shows the real numbers without an example warning', () => {
  setup()
  expect(screen.getByRole('img', { name: 'Projects by service, 52 total' })).toBeInTheDocument()
  expect(screen.queryByText(/example numbers/i)).not.toBeInTheDocument()
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

test('each service lists what it includes, and links to projects built with it', () => {
  setup()
  const web = screen.getByRole('list', { name: 'Web Development includes' })
  expect(within(web).getByText('Landing pages')).toBeInTheDocument()
  const ai = screen.getByRole('list', { name: 'AI Implementation includes' })
  expect(within(ai).getByText('Chatbots')).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /LeadEngine/ })[0]).toHaveAttribute('href', '/portfolio')
})

test('shows the Google rating', () => {
  setup()
  expect(screen.getByLabelText(/rated 5\.0 out of 5 on google/i)).toBeInTheDocument()
})
