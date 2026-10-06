import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders Home content at the root route', () => {
  window.history.pushState({}, '', '/')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})

test('the old /services route redirects to the home page services anchor', () => {
  window.history.pushState({}, '', '/services')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  expect(screen.getByText('CUSTOM SERVICES FOR YOUR BUSINESS')).toBeInTheDocument()
})

test('renders the NotFound page (with Nav/Footer) for an unmatched route', () => {
  window.history.pushState({}, '', '/this-does-not-exist')
  render(<App />)
  expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Back to home →' })).toHaveAttribute('href', '/')
  // Nav and Footer still render around the NotFound page since it's inside the Layout route.
  expect(screen.getAllByRole('link', { name: 'Portfolio' }).length).toBeGreaterThan(0)
})
