import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = {
  //children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimalist?: boolean
  icon?: JSX.Element
  as?: React.ElementType
  //forma bem estrita de tipar...(adicionando osegundo type posso usar o botão como botão ou link)
  // onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
} & ButtonTypes
const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    icon,
    children,
    size = 'medium',
    fullWidth = false,
    minimalist = false,
    ...props
  },
  ref,
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimalist={minimalist}
    ref={ref}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
