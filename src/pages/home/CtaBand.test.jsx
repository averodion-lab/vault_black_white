import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CtaBand } from './CtaBand'

test('renders the heading and the contact CTA', () => {
  render(
    <MemoryRouter>
      <CtaBand />
    </MemoryRouter>
  )
  expect(screen.getByText('Ready to grow your business online?')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Start Your Project →' })).toHaveAttribute('href', '/contact')
})
