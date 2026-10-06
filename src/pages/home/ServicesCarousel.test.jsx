import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { ServicesCarousel } from './ServicesCarousel'

function setup() {
  return render(
    <MemoryRouter>
      <ServicesCarousel />
    </MemoryRouter>
  )
}

test('shows the first two services by default', () => {
  setup()
  expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
  expect(screen.getByText('Web Development')).toBeInTheDocument()
  expect(screen.queryByText('AI Implementation')).not.toBeInTheDocument()
})

test('clicking Next advances to the next pair of services', async () => {
  setup()
  const user = userEvent.setup()
  await user.click(screen.getByRole('button', { name: 'Next' }))
  expect(screen.getByText('AI Implementation')).toBeInTheDocument()
  expect(screen.getByText('App Development')).toBeInTheDocument()
})

test('clicking Previous from the first slide wraps to the last slide', async () => {
  setup()
  const user = userEvent.setup()
  await user.click(screen.getByRole('button', { name: 'Previous' }))
  expect(screen.getByText('Software Development')).toBeInTheDocument()
  expect(screen.getByText('Maintenance & Support')).toBeInTheDocument()
})
