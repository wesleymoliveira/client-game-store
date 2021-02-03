import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSideBar, { ExploreSideBarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  args: {
    items: items,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story<ExploreSideBarProps> = (args) => (
  <ExploreSideBar {...args} />
)
