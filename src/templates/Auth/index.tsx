import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo id="banner" />

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform
          </S.Subtitle>
        </div>

        <S.Footer>WON Games 2021 - Todos os direitos reservados.</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.ContentBlock>
      <S.ContentWrapper>
        <Logo color="black" size="large" id="content" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.ContentBlock>
  </S.Wrapper>
)

export default Auth
