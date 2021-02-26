import Base from 'templates/Base'
import Spinner from 'react-spinner-material'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import * as S from './styles'
import { useQuery } from '@apollo/client'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'
import theme from 'styles/theme'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQuery<
    QueryGames,
    QueryGamesVariables
  >(QUERY_GAMES, { variables: { limit: 15 } })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSideBar onFilter={handleFilter} items={filterItems} />

        {/* Na prática esse loading nunca vai ser chamado,
            a função initialApolloState alimenta os dados
            do frontend com a requisição para o backend  - SEO
        */}
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spinner
              radius={120}
              color={theme.colors.primary}
              stroke={2}
              visible={true}
            />
          </div>
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover!.url}`}
                  price={game.price}
                />
              ))}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
