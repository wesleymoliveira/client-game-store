import { Story, Meta } from '@storybook/react/types-6-0'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const WithoutBadge: Story = (args) => <CartIcon {...args} />

export const WithBadge: Story = (args) => <CartIcon {...args} />

WithBadge.args = {
  quantity: 15,
}
