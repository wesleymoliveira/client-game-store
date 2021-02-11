import { initializeApollo } from 'utils/apollo'
import Home, { HomeTemplateProps } from 'templates/Home'

import gamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, freeGames, upcommingGames },
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: banner.image?.url
          ? `http://localhost:1337${banner.image?.url}`
          : `http://localhost:1337/uploads/nothing.jpg`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.sizes,
        }),
      })),
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : `http://localhost:1337/uploads/nothing.jpg`,
        price: game.price,
      })),
      mostPopularHighlight: HighlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: upcommingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : `http://localhost:1337/uploads/nothing.jpg`,
        price: game.price,
      })),
      upcomingHighlight: HighlightMock,

      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : `http://localhost:1337/uploads/nothing.jpg`,
        price: game.price,
      })),
      freeHighlight: HighlightMock,
    },
  }
}
