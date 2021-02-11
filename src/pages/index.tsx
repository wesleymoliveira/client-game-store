import { initializeApollo } from 'utils/apollo'
import Home, { HomeTemplateProps } from 'templates/Home'

import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, freeGames, upcommingGames, sections },
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

      newGamesTitle: sections?.newGames?.title,
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : `http://localhost:1337/uploads/nothing.jpg`,
        price: game.price,
      })),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
        buttonLabel: sections?.popularGames?.highlight?.buttomLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        ...(sections?.popularGames?.highlight?.floatImage && {
          floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage.url}`,
        }),
        alignment: sections?.popularGames?.highlight?.aligment,
      },
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : `http://localhost:1337/uploads/nothing.jpg`,
        price: game.price,
      })),

      upcomingGamesTitle: sections?.upComingGames?.title,
      upcomingGames: upcommingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : `http://localhost:1337/uploads/nothing.jpg`,
        price: game.price,
      })),
      upcomingHighlight: {
        title: sections?.upComingGames?.highlight?.title,
        subtitle: sections?.upComingGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.upComingGames?.highlight?.background?.url}`,
        buttonLabel: sections?.upComingGames?.highlight?.buttomLabel,
        buttonLink: sections?.upComingGames?.highlight?.buttonLink,
        ...(sections?.upComingGames?.highlight?.floatImage && {
          floatImage: `http://localhost:1337${sections?.upComingGames?.highlight?.floatImage.url}`,
        }),
        alignment: sections?.upComingGames?.highlight?.aligment,
      },

      freeGamesTitle: sections?.freeGames?.title,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : `http://localhost:1337/uploads/nothing.jpg`,
        price: game.price,
      })),
      freeHighlight: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`,
        buttonLabel: sections?.freeGames?.highlight?.buttomLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink,
        ...(sections?.freeGames?.highlight?.floatImage && {
          floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatImage.url}`,
        }),
        alignment: sections?.freeGames?.highlight?.aligment,
      },
    },
  }
}
