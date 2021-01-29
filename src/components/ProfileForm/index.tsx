import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const ProfileForm = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" lineColor="primary">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="Wesley M Oliveira"
      />
      <TextField
        name="email"
        type="email"
        placeholder="email"
        label="E-mail"
        initialValue="wesley@wes.com"
        disabled
      />

      <TextField
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        name="new_password"
        type="password"
        placeholder="New password"
        label="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default ProfileForm
