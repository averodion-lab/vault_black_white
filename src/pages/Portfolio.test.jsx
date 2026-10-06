import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Portfolio } from './Portfolio'

function setup() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    </HelmetProvider>
  )
}

test('renders the hero and all 6 case studies', () => {
  setup()
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/REAL PROJECTS/)
  ;[
    'LeadEngine',
    'Ramzef Construction',
    'Tower Tigers Crew LLC',
    'Trusted Roofing Co.',
    'Seva Photos',
    "Jacey's Moving & Junk Removal",
  ].forEach((title) => {
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})

test('projects with a live site link out, ones without do not', () => {
  setup()
  expect(screen.getByRole('link', { name: /LeadEngine/i })).toHaveAttribute('href', 'https://theleadengine.net')
  expect(screen.getByRole('link', { name: /Ramzef Construction/i })).toHaveAttribute(
    'href',
    'https://ramzefconstructionllc.com'
  )
  // Trusted Roofing and Jacey's Moving have no live site yet — no external link for either
  expect(screen.queryByRole('link', { name: /Trusted Roofing/i })).not.toBeInTheDocument()
  expect(screen.queryByRole('link', { name: /Jacey's Moving/i })).not.toBeInTheDocument()
})
