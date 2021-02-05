import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSideBar onFilter={handleFilter} items={filterItems} />
        <section>
          <Grid>
            {games.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>
          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
