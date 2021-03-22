import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Wesley" />)

    expect(screen.queryByText(/Wesley/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Wesley" />)

    //open dropdown menu
    userEvent.click(screen.getByText(/wesley/i))

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i }),
    ).toBeInTheDocument()
  })
})
