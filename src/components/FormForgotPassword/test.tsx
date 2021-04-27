import userEvent from '@testing-library/user-event'
import 'server.mock'
import { render, screen } from 'utils/test-utils'

import FormForgotPasword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query,
}))
describe('<FormForgotPasword>', () => {
  it('should render the form', () => {
    render(<FormForgotPasword />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /send email/i }))
  })

  it('should validate the email', async () => {
    render(<FormForgotPasword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'valid@email.com',
    )

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(
      await screen.findByText(/You just received an email/i),
    ).toBeInTheDocument()
  })

  it('should show an invalid email', async () => {
    render(<FormForgotPasword />)

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid')

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(
      await screen.findByText(/Must be a valid email/i),
    ).toBeInTheDocument()
  })

  it('should show an error', async () => {
    render(<FormForgotPasword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'false@email.com',
    )

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(
      await screen.findByText(/This email does not exist/i),
    ).toBeInTheDocument()
  })

  it('should autofill if comes via logged user', async () => {
    query = { email: 'valid@email.com' }
    render(<FormForgotPasword />)

    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('valid@email.com')
  })
})
