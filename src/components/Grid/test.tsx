import { render } from 'utils/test-utils'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render corretly', () => {
    const { container } = render(<Grid />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        margin: 3.2rem 0;
        grid-gap: 2.4rem;
      }

      <div
        class="c0"
      />
    `)
  })
})
