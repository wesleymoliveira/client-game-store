import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'game/GameItem',
  component: GameItem,
  args: {
    img:
      'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00',
  },
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://link',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 01/01/2021 at  20:32',
  },
}
