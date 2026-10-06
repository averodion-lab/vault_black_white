import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { FAQ } from './FAQ'
import { FAQ_CATEGORIES } from '@/data/site'

function setup() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    </HelmetProvider>
  )
}

test('renders the hero and all 5 category headings', () => {
  setup()
  expect(screen.getByRole('heading', { level: 1, name: 'Questions, answered.' })).toBeInTheDocument()
  expect(FAQ_CATEGORIES).toHaveLength(5)
  FAQ_CATEGORIES.forEach((c) => expect(screen.getByRole('heading', { name: c.name })).toBeInTheDocument())
})

test('renders all 16 questions, closed by default', () => {
  const { container } = setup()
  const details = container.querySelectorAll('details')
  expect(details).toHaveLength(16)
  details.forEach((d) => expect(d).not.toHaveAttribute('open'))
})

test('each item opens independently', async () => {
  setup()
  const user = userEvent.setup()
  const q1 = screen.getByText('What exactly does Vault Development do?')
  const q2 = screen.getByText('Where are you located and do you work remotely?')
  await user.click(q1)
  await user.click(q2)
  expect(q1.closest('details')).toHaveAttribute('open')
  expect(q2.closest('details')).toHaveAttribute('open')
})
