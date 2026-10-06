import { render, screen } from '@testing-library/react'
import { GlassCard } from './GlassCard'

test('renders children inside the glass panel', () => {
  render(<GlassCard>Hello</GlassCard>)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})

test('supports a polymorphic "as" prop on the inner tag', () => {
  render(<GlassCard as="button">Click</GlassCard>)
  expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument()
})

test('forwards className to the inner tag', () => {
  render(<GlassCard className="extra-class">Hi</GlassCard>)
  expect(screen.getByText('Hi')).toHaveClass('extra-class')
})
