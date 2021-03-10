import { Story, Meta } from '@storybook/react/types-6-0'
import { CartContextData } from 'hooks/use-cart'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'game/GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300X140',
    price: 235,
    promotionalPrice: 210,
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
}

export const AlreadyInCart: Story<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

AlreadyInCart.args = {
  isInCart: () => true,
}
