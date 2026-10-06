import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { GradientButton } from './GradientButton'

test('renders a router Link when "to" is given', () => {
  render(
    <MemoryRouter>
      <GradientButton to="/contact">Go</GradientButton>
    </MemoryRouter>
  )
  expect(screen.getByRole('link', { name: 'Go' })).toHaveAttribute('href', '/contact')
})

test('renders a plain anchor when "href" is given', () => {
  render(<GradientButton href="https://example.com">Go</GradientButton>)
  expect(screen.getByRole('link', { name: 'Go' })).toHaveAttribute('href', 'https://example.com')
})

test('renders a button when neither "to" nor "href" is given', () => {
  render(<GradientButton>Go</GradientButton>)
  expect(screen.getByRole('button', { name: 'Go' })).toBeInTheDocument()
})
