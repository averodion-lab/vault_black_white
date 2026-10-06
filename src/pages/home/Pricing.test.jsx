import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Pricing } from './Pricing'

function setup() {
  return render(
    <MemoryRouter>
      <Pricing />
    </MemoryRouter>
  )
}

test('renders the heading and all 3 tiers', () => {
  setup()
  expect(screen.getByText('PRICING OVERVIEW')).toBeInTheDocument()
  ;['Starter', 'Professional', 'Enterprise'].forEach((tier) => {
    expect(screen.getByText(tier)).toBeInTheDocument()
  })
  expect(screen.getByText('Most Popular')).toBeInTheDocument()
})
