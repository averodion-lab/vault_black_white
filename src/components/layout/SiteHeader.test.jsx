import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'

function setup() {
  return render(
    <MemoryRouter>
      <SiteHeader />
    </MemoryRouter>
  )
}

test('links the mark home and the pill to contact', () => {
  setup()
  expect(screen.getByRole('link', { name: 'Vault Development home' })).toHaveAttribute('href', '/')
  expect(screen.getByRole('link', { name: /contact now/i })).toHaveAttribute('href', '/contact')
})

test('the dots button opens the menu and Escape closes it', async () => {
  setup()
  const user = userEvent.setup()
  const open = screen.getByRole('button', { name: 'Open menu' })
  expect(open).toHaveAttribute('aria-expanded', 'false')
  await user.click(open)
  expect(open).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByRole('button', { name: 'Close menu' })).toHaveFocus()
  ;['Home', 'Portfolio', 'About', 'FAQ', 'Contact'].forEach((l) =>
    expect(screen.getByRole('link', { name: l })).toBeInTheDocument()
  )
  await user.keyboard('{Escape}')
  expect(open).toHaveAttribute('aria-expanded', 'false')
})

test('clicking a menu link closes the menu', async () => {
  setup()
  const user = userEvent.setup()
  const open = screen.getByRole('button', { name: 'Open menu' })
  await user.click(open)
  await user.click(screen.getByRole('link', { name: 'Portfolio' }))
  expect(open).toHaveAttribute('aria-expanded', 'false')
})
