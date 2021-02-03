import Button from 'components/Button'
import Checkbox from 'components/CheckBox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

export type ExploreSideBarProps = {
  items: ItemProps[]
}

const ExploreSideBar = ({ items }: ExploreSideBarProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>

    {items.map((item) => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size="small">
          {item.title}
        </Heading>

        {item.type === 'checkbox' &&
          item.fields.map((field) => (
            <Checkbox
              key={field.name}
              name={field.name}
              label={field.label}
              labelFor={field.name}
            />
          ))}

        {item.type === 'radio' &&
          item.fields.map((field) => (
            <Radio
              key={field.name}
              id={field.name}
              value={field.name}
              name={item.name}
              label={field.label}
              labelFor={field.name}
            />
          ))}
      </div>
    ))}

    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
)

export default ExploreSideBar
