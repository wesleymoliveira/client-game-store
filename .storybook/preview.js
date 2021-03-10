import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'

import { ThemeProvider } from 'styled-components'
import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'

import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

addDecorator(withNextRouter())

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: theme.colors.white },
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
          ...(context?.args?.cartContextValues || {}),
          ...context.args,
        }}
      >
        <GlobalStyles removeBg />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  ),
]
/* export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
 */
