import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story = (args) => <ProfileMenu {...args} />
