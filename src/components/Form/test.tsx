import { renderWithTheme } from 'utils/tests/helpers'

import { FormWrapper, FormLink } from '.'

describe('<Form />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My <a href="#">link</a>
        </FormLink>
      </FormWrapper>,
    )

    expect(container.parentElement).toMatchInlineSnapshot()
  })
})
