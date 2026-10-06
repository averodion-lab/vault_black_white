import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'

function setup() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )
}

test('renders the contact links', () => {
  setup()
  expect(screen.getByText('vaultdevelopmentagency@gmail.com')).toHaveAttribute('href', 'mailto:vaultdevelopmentagency@gmail.com')
  expect(screen.getByText('678-755-6900')).toHaveAttribute('href', 'tel:6787556900')
})

test('renders the page links, legal links and copyright', () => {
  setup()
  ;['Home', 'Portfolio', 'About', 'FAQ', 'Contact'].forEach((l) => expect(screen.getByRole('link', { name: l })).toBeInTheDocument())
  expect(screen.getByText('Privacy Policy')).toHaveAttribute('href', '/privacy')
  expect(screen.getByText('Terms of Service')).toHaveAttribute('href', '/terms')
  expect(screen.getByText('© 2026 Vault Development. All rights reserved.')).toBeInTheDocument()
})

test('social links open in a new tab', () => {
  setup()
  const ig = screen.getByRole('link', { name: 'Instagram' })
  expect(ig).toHaveAttribute('href', 'https://www.instagram.com/vaultdevelopment')
  expect(ig).toHaveAttribute('target', '_blank')
  expect(ig).toHaveAttribute('rel', 'noopener noreferrer')
  expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', 'https://www.facebook.com/share/1DzY5gekXH/')
})
