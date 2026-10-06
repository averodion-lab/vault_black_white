import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { About } from './About'

function setup() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <About />
      </MemoryRouter>
    </HelmetProvider>
  )
}

test('renders the hero, story copy, and all 4 highlights', () => {
  setup()
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/DIFFERENT/)
  expect(screen.getByText(/every business deserves a digital presence/i)).toBeInTheDocument()
  ;['Custom-Built, Always', 'Nationwide Reach', 'AI-Forward Approach', 'Ongoing Support'].forEach((title) => {
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})

test('renders all 6 values with real icons, not unicode glyphs', () => {
  const { container } = setup()
  ;['Honesty First', 'Quality Over Speed', 'Local Commitment', 'Tech With Purpose', 'Long-Term Partnership', 'Results-Driven'].forEach(
    (title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  )
  expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(10)
  expect(container.textContent).not.toMatch(/[◈◎⬡▣◇⬢]/)
})

test('renders both team members with photos, names, and titles', () => {
  setup()
  expect(screen.getByText('Rodion Averianov')).toBeInTheDocument()
  expect(screen.getByText('Founder & Lead Software Developer')).toBeInTheDocument()
  expect(screen.getByAltText('Rodion Averianov')).toHaveAttribute('src', '/assets/images/team-rodion-averianov.jpg')

  expect(screen.getByText('Ryan Grant')).toBeInTheDocument()
  expect(screen.getByText('Digital Marketing Specialist')).toBeInTheDocument()
  expect(screen.getByAltText('Ryan Grant')).toHaveAttribute('src', '/assets/images/team-ryan-grant.jpg')
})
