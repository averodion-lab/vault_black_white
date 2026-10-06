import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PortfolioTeaser } from './PortfolioTeaser'

test('renders all 3 preview projects linking to /portfolio', () => {
  render(
    <MemoryRouter>
      <PortfolioTeaser />
    </MemoryRouter>
  )
  expect(screen.getByAltText('Ramzef Construction')).toHaveAttribute('src', '/assets/images/ramzef-construction-website.webp')
  expect(screen.getByAltText('LeadEngine')).toBeInTheDocument()
  expect(screen.getByAltText('Tower Tigers')).toBeInTheDocument()
  const links = screen.getAllByRole('link', { name: /Ramzef Construction|LeadEngine|Tower Tigers Crew/ })
  links.forEach((link) => expect(link).toHaveAttribute('href', '/portfolio'))
})
