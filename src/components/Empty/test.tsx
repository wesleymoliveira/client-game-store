import { render, screen } from 'utils/test-utils'

import Empty from '.'

const props = {
  title: 'Simple title',
  description: 'Simple Description',
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} hasLink />)

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

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render link when hasLink not passed', () => {
    render(<Empty {...props} />)

    expect(
      screen.queryByRole('link', {
        name: /go back to store/i,
      }),
    ).not.toBeInTheDocument()
  })
})
