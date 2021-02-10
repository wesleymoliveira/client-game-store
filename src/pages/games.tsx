import GamesTemplate, { GamesTemplateProps } from '../templates/Games'

import filterItemMock from 'components/ExploreSideBar/mock'
import { gql } from '@apollo/client'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  })
  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: game.cover
          ? `http://localhost:1337${game.cover.url}`
          : `http://localhost:1337/uploads/nothing.jpg`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD',
        }).format(game.price),
      })),
      filterItems: filterItemMock,
    },
  }
}
