import { render, screen } from '@testing-library/react'
import { FounderNote } from './FounderNote'

test('shows the message from Rodion with his name and title', () => {
  render(<FounderNote>I read every message myself.</FounderNote>)
  expect(screen.getByText('I read every message myself.')).toBeInTheDocument()
  expect(screen.getByText('Rodion Averianov')).toBeInTheDocument()
  expect(screen.getByText('Founder & Lead Software Developer')).toBeInTheDocument()
})
