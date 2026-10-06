import { render, screen } from '@testing-library/react'
import { Reveal } from './Reveal'

test('renders children', () => {
  render(<Reveal>Hello</Reveal>)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})

test('falls back to visible state when IntersectionObserver is unavailable (e.g. jsdom)', () => {
  render(<Reveal>Hi</Reveal>)
  expect(screen.getByText('Hi')).toHaveClass('opacity-100')
  expect(screen.getByText('Hi')).not.toHaveClass('opacity-0')
})

test('supports a polymorphic "as" prop', () => {
  render(<Reveal as="span">Text</Reveal>)
  expect(screen.getByText('Text').tagName).toBe('SPAN')
})
