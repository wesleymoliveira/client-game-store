import { initializeApollo } from 'utils/apollo'
import Home, { HomeTemplateProps } from 'templates/Home'

import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, freeGames, upcommingGames, sections },
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache', //assim sempre garanto o dado novo na geração do estático
  })

  return {
    revalidate: 30,
    props: {
      banners: bannerMapper(banners),

      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections?.popularGames?.games),

      upcomingGamesTitle: sections?.upComingGames?.title,
      upcomingGames: gamesMapper(upcommingGames),
      upcomingHighlight: highlightMapper(sections?.upComingGames?.highlight),

      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight),
    },
  }
}
