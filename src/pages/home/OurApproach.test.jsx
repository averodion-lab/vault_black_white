import { render, screen } from '@testing-library/react'
import { OurApproach } from './OurApproach'

test('renders the heading and all 3 process steps', () => {
  render(<OurApproach />)
  expect(screen.getByText('OUR APPROACH')).toBeInTheDocument()
  ;['We Analyze', 'We Design', 'We Implement'].forEach((title) => {
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
