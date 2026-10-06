import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable, Donut } from './Charts'
import { useTip } from '@/hooks/useTip'

function DonutHarness() {
  const tip = useTip()
  return <Donut data={[['A', 3], ['B', 1]]} tip={tip} />
}

test('the donut shows the total and a legend with every value', () => {
  render(<DonutHarness />)
  expect(screen.getByRole('img', { name: 'Projects by service, 4 total' })).toBeInTheDocument()
  expect(screen.getByText('A').closest('li')).toHaveTextContent('A 3')
  expect(screen.getByText('B').closest('li')).toHaveTextContent('B 1')
})

test('the table view toggles open and closed', async () => {
  render(<DataTable head={['Year', 'Projects']} rows={[['2025', 26]]} />)
  const user = userEvent.setup()
  expect(screen.queryByRole('table')).not.toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Show as table' }))
  expect(screen.getByRole('table')).toHaveTextContent('2025')
  await user.click(screen.getByRole('button', { name: 'Hide table' }))
  expect(screen.queryByRole('table')).not.toBeInTheDocument()
})
