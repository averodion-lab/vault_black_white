import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'

test('renders the contact links', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )
  expect(screen.getByText('vaultdevelopmentagency@gmail.com')).toHaveAttribute(
    'href',
    'mailto:vaultdevelopmentagency@gmail.com'
  )
  expect(screen.getByText('678-755-6900')).toHaveAttribute('href', 'tel:6787556900')
})

test('renders all 5 page links and the copyright line', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )
  ;['Home', 'Portfolio', 'About', 'FAQ', 'Contact'].forEach((label) => {
    expect(screen.getAllByText(label).length).toBeGreaterThan(0)
  })
  expect(screen.getByText('© 2026 Vault Development. All rights reserved.')).toBeInTheDocument()
})

test('renders the legal links', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )
  expect(screen.getByText('Privacy Policy')).toHaveAttribute('href', '/privacy')
  expect(screen.getByText('Terms of Service')).toHaveAttribute('href', '/terms')
})

test('renders social links that open in a new tab', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )
  const instagram = screen.getByRole('link', { name: 'Instagram' })
  expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/vaultdevelopment')
  expect(instagram).toHaveAttribute('target', '_blank')
  expect(instagram).toHaveAttribute('rel', 'noopener noreferrer')

  const facebook = screen.getByRole('link', { name: 'Facebook' })
  expect(facebook).toHaveAttribute('href', 'https://www.facebook.com/share/1DzY5gekXH/')
})
