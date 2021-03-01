import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import { css } from 'styled-components'

import ExploreSideBar from '.'

import { Overlay } from './styles'
import items from './mock'

describe('<ExploreSideBar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSideBar onFilter={jest.fn} items={items} />)

    expect(
      screen.getByRole('heading', { name: /sort by/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price inputs', () => {
    renderWithTheme(<ExploreSideBar onFilter={jest.fn} items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument()
  })

  it('should render sort radios', () => {
    renderWithTheme(<ExploreSideBar onFilter={jest.fn} items={items} />)

    expect(
      screen.getByRole('radio', { name: /low to high/i }),
    ).toBeInTheDocument()
  })

  it('should render platforms inputs', () => {
    renderWithTheme(<ExploreSideBar onFilter={jest.fn} items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /windows/i }),
    ).toBeInTheDocument()
  })

  it('should render gender inputs', () => {
    renderWithTheme(<ExploreSideBar onFilter={jest.fn} items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /action/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /indie/i })).toBeInTheDocument()
  })

  it('should render filter button', () => {
    renderWithTheme(<ExploreSideBar onFilter={jest.fn} items={items} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should render with initial values', () => {
    renderWithTheme(
      <ExploreSideBar
        onFilter={jest.fn}
        items={items}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high',
        }}
      />,
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should return selected items with initial values', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSideBar
        items={items}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high',
        }}
        onFilter={onFilter}
      />,
    )

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'low-to-high',
    })
  })

  it('should return selected items', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSideBar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'low-to-high',
    })
  })

  it('should altern selected radios', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSideBar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      sort_by: 'high-to-low',
    })
  })

  it('should open/close sidebar when filtering on mobile ', () => {
    const { container } = renderWithTheme(
      <ExploreSideBar items={items} onFilter={jest.fn} />,
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `),
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/close filters/))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
