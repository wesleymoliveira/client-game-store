import { render, screen } from 'utils/test-utils'

import ProfileForm from '.'

describe('<ProfileForm />', () => {
  it('should render the profile form', () => {
    render(<ProfileForm username="Wesley" />)

    expect(
      screen.getByRole('heading', { name: /my profile/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
