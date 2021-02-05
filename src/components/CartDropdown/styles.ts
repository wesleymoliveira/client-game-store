import styled from 'styled-components'

import { Wrapper as CartWrapperStyles } from 'components/CartList/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${CartWrapperStyles} {
    ${media.greaterThan('medium')`
      width: 56rem;
    `}
  }
`
