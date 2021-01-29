import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now',
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />,
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link',
}

export const Minimalist: Story = (args) => <Button {...args} />

Minimalist.args = {
  minimalist: true,
  size: 'medium',
  children: 'Add to WishList',
  icon: <FavoriteBorder />,
}

export const Disabled: Story = (args) => <Button {...args} />

Disabled.args = {
  disabled: true,
  children: 'Add to WishList',
}
