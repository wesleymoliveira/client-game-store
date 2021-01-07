import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https:source.unsplash.com/user/willianjusten/1042X580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getAllByRole('heading', { name: /Defy death/i }),
    ).toBeInTheDocument()

    expect(
      screen.getAllByRole('heading', {
        name: /Play the new crashLands season/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getAllByRole('img', { name: /Defy death/i }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
