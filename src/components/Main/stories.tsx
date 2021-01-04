import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'JavaScript',
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'JavaScript2',
}
