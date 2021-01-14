import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render Menu and Footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact/i }),
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Most popular/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Upcomming/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Free Games/i }),
    ).toBeInTheDocument()
  })
})
