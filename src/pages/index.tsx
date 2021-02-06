import { gql, useQuery } from '@apollo/client'
import { initializeApollo } from 'utils/apollo'

import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const data = await apolloClient.query({ query: GET_GAMES })
  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: HighlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: HighlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: HighlightMock,
    },
  }
}
