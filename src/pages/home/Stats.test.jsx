import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

test('renders all 4 stat numbers', () => {
  render(<Stats />)
  expect(screen.getAllByText('100%')).toHaveLength(2)
  expect(screen.getByText('24H')).toBeInTheDocument()
  expect(screen.getByText('50+')).toBeInTheDocument()
})

test('renders all 4 stat labels', () => {
  render(<Stats />)
  expect(screen.getByText('Custom Built')).toBeInTheDocument()
  expect(screen.getByText('Response Time')).toBeInTheDocument()
  expect(screen.getByText('Customers Helped')).toBeInTheDocument()
  expect(screen.getByText('Customer Satisfaction')).toBeInTheDocument()
})
