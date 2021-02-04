import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSideBar from '.'
import items from './mock'

describe('<ExploreSideBar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSideBar items={items} />)

    expect(
      screen.getByRole('heading', { name: /sort by/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price inputs', () => {
    renderWithTheme(<ExploreSideBar items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument()
  })

  it('should render sort radios', () => {
    renderWithTheme(<ExploreSideBar items={items} />)

    expect(
      screen.getByRole('radio', { name: /low to high/i }),
    ).toBeInTheDocument()
  })

  it('should render system inputs', () => {
    renderWithTheme(<ExploreSideBar items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /windows/i }),
    ).toBeInTheDocument()
  })

  it('should render gender inputs', () => {
    renderWithTheme(<ExploreSideBar items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /action/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /indie/i })).toBeInTheDocument()
  })

  it('should render filter button', () => {
    renderWithTheme(<ExploreSideBar items={items} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should render with initial values', () => {
    renderWithTheme(
      <ExploreSideBar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />,
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })
})
