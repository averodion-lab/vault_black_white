import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Home } from './Home'

function renderHome() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </HelmetProvider>
  )
}

test('renders every homepage section', () => {
  renderHome()
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  expect(screen.getByText(/not a template shop/i)).toBeInTheDocument()
  expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
  expect(screen.getByText('OUR APPROACH')).toBeInTheDocument()
  expect(screen.getByText('VAULT VS. THE REST')).toBeInTheDocument()
  expect(screen.getByText('SELECTED PROJECTS')).toBeInTheDocument()
  expect(screen.getByText('PRICING OVERVIEW')).toBeInTheDocument()
  expect(screen.getByText('WHAT OUR CLIENTS SAY')).toBeInTheDocument()
  expect(screen.getByText('QUICK ANSWERS')).toBeInTheDocument()
  expect(screen.getByText('Ready to grow your business online?')).toBeInTheDocument()
})

test('sets the document title via Helmet', async () => {
  renderHome()
  await waitFor(() => {
    expect(document.title).toContain('Vault Development')
  })
})
