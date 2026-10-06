import { render, screen } from '@testing-library/react'
import { Reveal } from './Reveal'

test('renders children visibly when IntersectionObserver is unavailable', () => {
  render(<Reveal>Hello</Reveal>)
  expect(screen.getByText('Hello')).toHaveClass('reveal')
  expect(screen.getByText('Hello')).not.toHaveClass('pending')
})

test('supports a polymorphic "as" prop', () => {
  render(<Reveal as="span">Text</Reveal>)
  expect(screen.getByText('Text').tagName).toBe('SPAN')
})
