import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined'

import { signout } from 'next-auth/client'

import Link from 'next/link'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.Link>
      </Link>

      <Link href="/profile/cards" passHref>
        <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
          <FormatListBulleted size={24} />
          <span>My cards</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <AccountCircle size={24} />
          <span>My orders</span>
        </S.Link>
      </Link>
      <S.Link role="button" onClick={() => signout()} title="Sign Out">
        <ExitToApp size={24} />
        <span>Sign Out</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
