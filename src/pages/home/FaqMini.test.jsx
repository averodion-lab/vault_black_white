import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { FaqMini } from './FaqMini'

test('only one FAQ is open at a time', async () => {
  render(
    <MemoryRouter>
      <FaqMini />
    </MemoryRouter>
  )
  const user = userEvent.setup()
  const q1 = screen.getByRole('button', { name: /how do we get started/i })
  const q2 = screen.getByRole('button', { name: /how much does a project cost/i })
  expect(q1).toHaveAttribute('aria-expanded', 'false')

  await user.click(q1)
  expect(q1).toHaveAttribute('aria-expanded', 'true')

  await user.click(q2)
  expect(q1).toHaveAttribute('aria-expanded', 'false')
  expect(q2).toHaveAttribute('aria-expanded', 'true')
})

test('renders the link to the full FAQ page', () => {
  render(
    <MemoryRouter>
      <FaqMini />
    </MemoryRouter>
  )
  expect(screen.getByRole('link', { name: 'View All FAQs →' })).toHaveAttribute('href', '/faq')
})
