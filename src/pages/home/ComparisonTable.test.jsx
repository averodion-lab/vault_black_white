import { render, screen, within } from '@testing-library/react'
import { ComparisonTable } from './ComparisonTable'

test('renders all 8 comparison rows plus the header row', () => {
  render(<ComparisonTable />)
  expect(screen.getAllByRole('row')).toHaveLength(9)
})

test('marks 24-hour response time as only partial for other agencies', () => {
  render(<ComparisonTable />)
  const row = screen.getByText('24-Hour Response Time').closest('tr')
  expect(within(row).getByLabelText('Partial')).toBeInTheDocument()
})

test('marks fully custom design as a "no" for other agencies', () => {
  render(<ComparisonTable />)
  const row = screen.getByText('100% Custom Design — No Templates').closest('tr')
  expect(within(row).getByLabelText('No')).toBeInTheDocument()
})
