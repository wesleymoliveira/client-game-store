import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo, { GameInfoProps } from '.'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    title: 'Borderlands 3',
    price: '215,00',
    description:
      'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.',
  },
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
