import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Contact } from './Contact'

function setup() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    </HelmetProvider>
  )
}

beforeEach(() => {
  global.fetch = vi.fn()
  window.localStorage.clear()
})

test('renders the hero and contact details', () => {
  setup()
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/LET'S BUILD/)
  expect(screen.getByText('vaultdevelopmentagency@gmail.com')).toHaveAttribute(
    'href',
    'mailto:vaultdevelopmentagency@gmail.com'
  )
  expect(screen.getByText('678-755-6900')).toHaveAttribute('href', 'tel:6787556900')
})

test('shows an inline error when required fields are missing', async () => {
  setup()
  const user = userEvent.setup()
  await user.click(screen.getByRole('button', { name: /send message/i }))
  expect(await screen.findByText(/please fill in all required fields/i)).toBeInTheDocument()
  expect(global.fetch).not.toHaveBeenCalled()
})

test('shows an inline error for an invalid email', async () => {
  setup()
  const user = userEvent.setup()
  await user.type(screen.getByLabelText(/first name/i), 'Jane')
  await user.type(screen.getByLabelText(/email address/i), 'not-an-email')
  await user.selectOptions(screen.getByLabelText(/service needed/i), 'Web Development')
  await user.type(screen.getByLabelText(/tell us about your project/i), 'A real project description here.')
  await user.click(screen.getByRole('button', { name: /send message/i }))
  expect(await screen.findByText(/valid email address/i)).toBeInTheDocument()
  expect(global.fetch).not.toHaveBeenCalled()
})

test('submits to the real Formspree endpoint and shows the success state on a valid submission', async () => {
  global.fetch.mockResolvedValueOnce({ ok: true })
  setup()
  const user = userEvent.setup()
  await user.type(screen.getByLabelText(/first name/i), 'Jane')
  await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
  await user.selectOptions(screen.getByLabelText(/service needed/i), 'Web Development')
  await user.type(screen.getByLabelText(/tell us about your project/i), 'A real project description here.')
  await user.click(screen.getByRole('button', { name: /send message/i }))

  await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://formspree.io/f/xnjgpoza', expect.any(Object)))
  expect(await screen.findByText('Message Sent!')).toBeInTheDocument()

  const [url, options] = global.fetch.mock.calls[0]
  expect(url).toBe('https://formspree.io/f/xnjgpoza')
  expect(options.method).toBe('POST')
  expect(options.headers).toMatchObject({ 'Content-Type': 'application/json' })
  expect(JSON.parse(options.body)).toMatchObject({
    name: 'Jane',
    email: 'jane@example.com',
    service: 'Web Development',
    message: 'A real project description here.',
  })
})
