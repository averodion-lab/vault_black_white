import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Nav } from './Nav'

function renderNav() {
  return render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  )
}

test('renders all 5 page links, including Contact', () => {
  renderNav()
  ;['Home', 'Portfolio', 'About', 'FAQ'].forEach((label) => {
    expect(screen.getAllByText(label).length).toBeGreaterThan(0)
  })
  expect(screen.getAllByText(/Contact/).length).toBeGreaterThan(0)
})

test('hamburger toggles aria-expanded and reveals the mobile menu', () => {
  renderNav()
  const button = screen.getByRole('button', { name: /toggle navigation menu/i })
  expect(button).toHaveAttribute('aria-expanded', 'false')
  fireEvent.click(button)
  expect(button).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByRole('link', { name: 'Contact →' })).toBeInTheDocument()
})

test('clicking a mobile nav link closes the menu again', () => {
  renderNav()
  const button = screen.getByRole('button', { name: /toggle navigation menu/i })
  fireEvent.click(button)
  fireEvent.click(screen.getByRole('link', { name: 'Contact →' }))
  expect(button).toHaveAttribute('aria-expanded', 'false')
})
