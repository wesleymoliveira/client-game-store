import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300X140',
    price: 'R$ 235,00',
  },
} as Meta

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />
