import 'match-media-mock'
import { screen } from '@testing-library/react'

import Gallery from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery />)
  })
})
