import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders Home content at the root route', () => {
  window.history.pushState({}, '', '/')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Zunova' })).toBeInTheDocument()
})

test('the old /services route redirects to the home page services section', () => {
  window.history.pushState({}, '', '/services')
  render(<App />)
  expect(screen.getByRole('heading', { name: 'Custom services for your business' })).toBeInTheDocument()
})

test('renders the NotFound page inside the layout for an unmatched route', () => {
  window.history.pushState({}, '', '/this-does-not-exist')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Lost in space.' })).toBeInTheDocument()
  expect(screen.getByText(/page not found/i)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/')
  // header and footer still wrap the page
  expect(screen.getByRole('link', { name: 'Zunova Digital home' })).toBeInTheDocument()
  expect(screen.getByText('© 2026 Zunova Digital. All rights reserved.')).toBeInTheDocument()
})
