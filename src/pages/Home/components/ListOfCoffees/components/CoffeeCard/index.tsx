import { useState } from 'react'
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
  const [quantity, setQuantity] = useState(1)

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
            <button onClick={() => setQuantity((prev) => prev - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </Quantity>
          <ShoppingButton onClick={() => console.log('a')}>
            <ShoppingCart weight="fill" size={22} color="white" />
          </ShoppingButton>
        </BuyingSection>
      </BuyingContainer>
    </CoffeeCardContainer>
  )
}
