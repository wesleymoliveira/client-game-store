import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading size="small" lineBottom lineColor="primary" color="black">
      My orders
    </Heading>

    {items.length ? (
      items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You don't have orders yet"
        description="Hurry up! Buy new games with top discaounts"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
