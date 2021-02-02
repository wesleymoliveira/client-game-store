import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSideBar from '.'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta

export const Default: Story = () => <ExploreSideBar />
