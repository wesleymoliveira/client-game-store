import { Container } from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not found"
          description="Ops... Sorry, this page does not exist."
          hasLink
        />
      </Container>
    </Base>
  )
}
