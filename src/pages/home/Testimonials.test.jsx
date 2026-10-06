import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '@/data/testimonials'

test('renders the client reviews heading and every testimonial', () => {
  render(<Testimonials />)
  expect(screen.getByText('WHAT OUR CLIENTS SAY')).toBeInTheDocument()
  TESTIMONIALS.forEach((t) => {
    expect(screen.getAllByText(t.name).length).toBeGreaterThan(0)
    expect(screen.getAllByText(t.body).length).toBeGreaterThan(0)
  })
})
