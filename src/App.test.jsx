import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders Home content at the root route', () => {
  window.history.pushState({}, '', '/')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Zunova' })).toBeInTheDocument()
})

test('/services renders the services hub and /services/<slug> a service page', () => {
  window.history.pushState({}, '', '/services')
  const { unmount } = render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'What we build.' })).toBeInTheDocument()
  unmount()
  window.history.pushState({}, '', '/services/web-development')
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Web design & development' })).toBeInTheDocument()
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
