import { render, screen } from 'utils/test-utils'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the CartList', () => {
    const { container } = render(
      <CartList items={mockItems} total="R$ 330,00" />,
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a button', () => {
    render(<CartList items={mockItems} total="R$ 330,00" hasButton />)

    expect(screen.queryByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render Empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })
})
