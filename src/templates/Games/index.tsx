import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'

import { useQueryGames } from 'graphql/queries/games'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

import Base from 'templates/Base'

import Spinner from 'react-spinner-material'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import * as S from './styles'
import theme from 'styles/theme'
import Empty from 'components/Empty'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items,
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSideBar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems,
          })}
          onFilter={handleFilter}
          items={filterItems}
        />

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
            {data?.games.length ? (
              <>
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
              </>
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
              />
            )}
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
