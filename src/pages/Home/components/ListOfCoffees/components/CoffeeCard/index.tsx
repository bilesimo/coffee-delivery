import { ShoppingCart } from 'phosphor-react'
import {
  BuyingContainer,
  BuyingSection,
  CoffeeCardContainer,
  Tags,
  InformationContainer,
  Price,
  Quantity,
  ShoppingButton,
} from './styles'
import { getCoffeeImage } from '../../../../../../utils/getCoffeeImage'

export type CoffeeCardProps = {
  tags: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={getCoffeeImage(name)} alt=""></img>
      <Tags>
        {tags.map((tag) => (
          <div key={tag}>
            <span>{tag.toUpperCase()}</span>
          </div>
        ))}
      </Tags>
      <InformationContainer>
        <h2>{name}</h2>
        <p>{description}</p>
      </InformationContainer>
      <BuyingContainer>
        <Price>
          <span>R$</span>
          <span>{price}</span>
        </Price>
        <BuyingSection>
          <Quantity>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </Quantity>
          <ShoppingButton>
            <ShoppingCart weight="fill" size={16} color="white" />
          </ShoppingButton>
        </BuyingSection>
      </BuyingContainer>
    </CoffeeCardContainer>
  )
}
