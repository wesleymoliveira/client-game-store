import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Loader from 'components/Loader'
import Showcase from 'components/Showcase'
import { useWishlist } from 'hooks/use-wishlist'
import Base from 'templates/Base'
import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            hasLink
            title="Your wishlist is Empty"
            description="Games added to your wishlist will appear here"
          />
        )}
        <Divider />
      </Container>
      <Showcase
        title={recommendedTitle || 'You may like this games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}
export default Wishlist
