import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
      name
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String) {
    games(where: { slug: $slug }) {
      name
      short_description
      price
      description
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        src: url
      }
      developers {
        name
      }
      publisher {
        name
      }
      platforms {
        name
      }
      categories {
        name
      }
    }
  }
`
