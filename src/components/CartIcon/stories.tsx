import { Story, Meta } from '@storybook/react/types-6-0'
import CartIcon, { CartIconsProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const WithoutBadge: Story<CartIconsProps> = (args) => (
  <CartIcon {...args} />
)

export const WithBadge: Story<CartIconsProps> = (args) => <CartIcon {...args} />

WithBadge.args = {
  quantity: 15,
}
