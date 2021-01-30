import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileForm from '.'

export default {
  title: 'Profile/ProfileForm',
  component: ProfileForm,
} as Meta

export const Default: Story = () => <ProfileForm />
