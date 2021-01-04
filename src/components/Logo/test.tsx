import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //#1 renderizar o component (render)
    renderWithTheme(<Logo />)
    //# 2 selecionar o elemento a ser testado (screen) - queries - getByLabel ....
    //fiz o expect selecionando direto
    //# 3 expect - assertion - comparação ( Espero que o elemento tal tenha a cor branca)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    })
  })

  it('should render black label when color is passed', () => {
    //#1 renderizar o component (render)
    renderWithTheme(<Logo color="black" />)
    //# 2 selecionar o elemento a ser testado (screen) - queries - getByLabel ....

    //# 3 expect - assertion - comparação ( Espero que o elemento tal tenha a cor branca)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    })
  })

  it('should rendera bigger logo', () => {
    //#1 renderizar o component (render)
    renderWithTheme(<Logo size="large" />)
    //# 2 selecionar o elemento a ser testado (screen) - queries - getByLabel ....

    //# 3 expect - assertion - comparação ( Espero que o elemento tal tenha a cor branca)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    })
  })

  it('should rendera normal logo by default', () => {
    //#1 renderizar o component (render)
    renderWithTheme(<Logo />)
    //# 2 selecionar o elemento a ser testado (screen) - queries - getByLabel ....

    //# 3 expect - assertion - comparação ( Espero que o elemento tal tenha a cor branca)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
    })
  })

  it('should render a bigger Logo without text on mobile', () => {
    //#1 renderizar o component (render)
    renderWithTheme(<Logo hideOnMobile />)
    //# 2 selecionar o elemento a ser testado (screen) - queries - getByLabel ....

    //# 3 expect - assertion - comparação ( Espero que o elemento tal tenha a cor branca)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      },
    )
  })
})
