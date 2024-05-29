import { ShoppingCart } from 'phosphor-react'
import {
  BuyingContainer,
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
      <InformationContainer>
        <Tags>
          {tags.map((tag) => (
            <div key={tag}>
              <span>{tag}</span>
            </div>
          ))}
        </Tags>
        <h2>{name}</h2>
        <p>{description}</p>
      </InformationContainer>
      <BuyingContainer>
        <Price>
          <span>R$</span>
          <strong>{price}</strong>
        </Price>
        <Quantity>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </Quantity>
        <ShoppingButton>
          <ShoppingCart weight="fill" size={16} color="white" />
        </ShoppingButton>
      </BuyingContainer>
    </CoffeeCardContainer>
  )
}
