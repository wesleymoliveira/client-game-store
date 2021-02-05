import Dropdown from 'components/Dropdown'
import * as S from './styles'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp,
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import Link from 'next/link'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.WrapperLink>
          <AccountCircle />
          <span>My profile</span>
        </S.WrapperLink>
      </Link>

      <Link href="/wishlist" passHref>
        <S.WrapperLink>
          <FavoriteBorder />
          <span>Wishlist</span>
        </S.WrapperLink>
      </Link>

      <Link href="/logout" passHref>
        <S.WrapperLink>
          <ExitToApp />
          <span>Sign out</span>
        </S.WrapperLink>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
