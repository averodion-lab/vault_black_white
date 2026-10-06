import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AboutStrip } from './AboutStrip'

test('renders the about copy and the learn-more link', () => {
  render(
    <MemoryRouter>
      <AboutStrip />
    </MemoryRouter>
  )
  expect(screen.getByText(/not a template shop/i)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Learn About Us →' })).toHaveAttribute('href', '/about')
})

function mockMatchMedia(matches) {
  window.matchMedia = (query) => ({
    matches,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}

test('autoplays the video when the user has no reduced-motion preference', () => {
  mockMatchMedia(false)
  const { container } = render(
    <MemoryRouter>
      <AboutStrip />
    </MemoryRouter>
  )
  const video = container.querySelector('video')
  expect(video).toHaveAttribute('autoplay')
  expect(video).not.toHaveAttribute('controls')
})

test('does not autoplay the video when the user prefers reduced motion', () => {
  mockMatchMedia(true)
  const { container } = render(
    <MemoryRouter>
      <AboutStrip />
    </MemoryRouter>
  )
  const video = container.querySelector('video')
  expect(video).not.toHaveAttribute('autoplay')
  expect(video).toHaveAttribute('controls')
})
