import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSideBar from '.'

describe('<ExploreSideBar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSideBar />)

    expect(screen.getByRole('heading', { name: /Price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Genre/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price inputs', () => {
    renderWithTheme(<ExploreSideBar />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument()
  })

  it('should render sort radios', () => {
    renderWithTheme(<ExploreSideBar />)

    expect(
      screen.getByRole('radio', { name: /low to high/i }),
    ).toBeInTheDocument()
  })

  it('should render system inputs', () => {
    renderWithTheme(<ExploreSideBar />)

    expect(
      screen.getByRole('checkbox', { name: /windows/i }),
    ).toBeInTheDocument()
  })

  it('should render gender inputs', () => {
    renderWithTheme(<ExploreSideBar />)

    expect(
      screen.getByRole('checkbox', { name: /action/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('checkbox', { name: /terror/i }),
    ).toBeInTheDocument()
  })

  it('should render filter button', () => {
    renderWithTheme(<ExploreSideBar />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })
})
