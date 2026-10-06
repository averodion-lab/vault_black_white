import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { FAQ } from './FAQ'

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
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/FREQUENTLY/)
  ;['General', 'Pricing & Timeline', 'Process & Working Together', 'Technical & AI', 'Support & Maintenance'].forEach(
    (cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument()
    }
  )
})

test('renders all 16 questions', () => {
  setup()
  expect(screen.getAllByRole('button', { name: /\?$/ })).toHaveLength(16)
})

test('each item opens independently (no single-open constraint on this full page)', async () => {
  setup()
  const user = userEvent.setup()
  const q1 = screen.getByRole('button', { name: /what exactly does vault development do/i })
  const q2 = screen.getByRole('button', { name: /where are you located/i })
  await user.click(q1)
  await user.click(q2)
  expect(q1).toHaveAttribute('aria-expanded', 'true')
  expect(q2).toHaveAttribute('aria-expanded', 'true')
})
