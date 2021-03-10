import { ThemeProvider } from 'styled-components'
import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.mainBg,
      },
    ],
  },
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args,
        }}
      >
        <GlobalStyles removeBg />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  ),
]
