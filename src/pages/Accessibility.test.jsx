import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Accessibility } from './Accessibility'

test('renders the heading, the WCAG commitment and a way to get in touch', () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Accessibility />
      </MemoryRouter>
    </HelmetProvider>
  )
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Accessibility')
  expect(screen.getByText(/WCAG\) 2\.2 at level AA/)).toBeInTheDocument()
  ;['Our commitment', 'What we do', 'Known limitations'].forEach((h) => expect(screen.getByText(h)).toBeInTheDocument())
  expect(screen.getByText('vaultdevelopmentagency@gmail.com')).toHaveAttribute('href', 'mailto:vaultdevelopmentagency@gmail.com')
})
