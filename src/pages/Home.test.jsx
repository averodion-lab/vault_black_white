import userEvent from '@testing-library/user-event'
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
  expect(screen.getByRole('heading', { level: 1, name: 'Zunova' })).toBeInTheDocument()
  expect(screen.getByText('Websites, Apps & AI That Bring You Customers')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /get a free quote/i })).toHaveAttribute('href', '/contact')
  const svc = screen.getByRole('list', { name: 'What we build' })
  expect(within(svc).getAllByRole('listitem')).toHaveLength(5)
})

test('renders every homepage section', () => {
  setup()
  ;[
    "Who you'll work with",
    'Custom services for your business',
    'From first search to booked job. One team runs it all.',
    'From first call to launch day',
    "What we've built so far",
    'Built for real businesses',
    'Zunova vs. the rest',
    'Every project is custom-quoted',
    '30 reviews. 4.9 stars.',
    'Quick answers',
  ].forEach((name) => expect(screen.getByRole('heading', { name })).toBeInTheDocument())
})

test('shows both team members with photos', () => {
  setup()
  expect(screen.getByAltText('Rodion Averianov')).toHaveAttribute('src', '/assets/images/team-rodion-averianov.webp')
  expect(screen.getByAltText('Ryan Grant')).toHaveAttribute('src', '/assets/images/team-ryan-grant.webp')
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
  expect(screen.getByLabelText(/rated 4\.9 out of 5 on google from 30 reviews/i)).toBeInTheDocument()
})

test('the lead journey switches between kinds of business and links to contact', async () => {
  setup()
  const user = userEvent.setup()
  expect(screen.getByRole('tab', { name: 'Roofing' })).toHaveAttribute('aria-selected', 'true')
  expect(screen.getByText('Inspection booked')).toBeInTheDocument()
  await user.click(screen.getByRole('tab', { name: 'Moving' }))
  expect(screen.getByRole('tab', { name: 'Moving' })).toHaveAttribute('aria-selected', 'true')
  expect(screen.getByText('Move booked')).toBeInTheDocument()
  expect(screen.queryByText('Inspection booked')).not.toBeInTheDocument()
  expect(screen.getByRole('link', { name: /set this up for my business/i })).toHaveAttribute('href', '/contact')
})
