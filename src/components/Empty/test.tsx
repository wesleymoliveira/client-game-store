import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'Simple title',
  description: 'Simple Description',
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /gamer in a couch playing videogame/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /simple title/i,
      }),
    )

    expect(screen.getByText(/simple description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /go back to store/i,
      }),
    ).toHaveAttribute('href', '/')
  })

  it('should not render link when hasLink not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', {
        name: /go back to store/i,
      }),
    ).not.toBeInTheDocument()
  })
})
