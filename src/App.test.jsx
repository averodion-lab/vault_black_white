import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders Home content at the root route', () => {
  window.history.pushState({}, '', '/')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Vault' })).toBeInTheDocument()
})

test('the old /services route redirects to the home page services section', () => {
  window.history.pushState({}, '', '/services')
  render(<App />)
  expect(screen.getByRole('heading', { name: 'Custom services for your business' })).toBeInTheDocument()
})

test('renders the NotFound page inside the layout for an unmatched route', () => {
  window.history.pushState({}, '', '/this-does-not-exist')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Locked.' })).toBeInTheDocument()
  expect(screen.getByText(/page not found/i)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/')
  // header and footer still wrap the page
  expect(screen.getByRole('link', { name: 'Vault Development home' })).toBeInTheDocument()
  expect(screen.getByText('© 2026 Vault Development. All rights reserved.')).toBeInTheDocument()
})
