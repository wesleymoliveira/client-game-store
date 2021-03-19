import { render, screen, waitFor } from 'utils/test-utils'

import userEvent from '@testing-library/user-event'

import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    render(<TextField label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    render(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()
    render(<TextField onInputChange={onInputChange} name="Label" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    render(<TextField label="TextField" name="Label" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Renders with Icon', () => {
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render an icon in the right position when iconPosition is passed', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />,
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should not change values whe disabled is passed', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="Label"
        disabled
      />,
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('it is not acessible via tab command when disabled', () => {
    render(<TextField label="TextField" name="Label" disabled />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('Render with Error', () => {
    const { container } = render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        id="TextField"
        error="Error Message"
      />,
    )

    expect(screen.getByText('Error Message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
