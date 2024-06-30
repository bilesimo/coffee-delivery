import { useContext } from 'react'
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
import { SelectedCoffeesContext } from '../../../../context/SelectedCoffeesContext'
import { getCoffeeImage } from '../../../../utils/getCoffeeImage'

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
  const { selectedCoffees, addNewCoffee, removeCoffee } = useContext(
    SelectedCoffeesContext,
  )

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
          <span>{price.toFixed(2)}</span>
        </Price>
        <BuyingSection>
          <Quantity>
            <button onClick={() => removeCoffee({ name, price, quantity: 1 })}>
              -
            </button>
            <span>
              {selectedCoffees.find((item) => item.name === name)?.quantity ||
                0}
            </span>
            <button
              onClick={() =>
                addNewCoffee({
                  name,
                  price,
                  quantity: 1,
                })
              }
            >
              +
            </button>
          </Quantity>
          <ShoppingButton>
            <ShoppingCart weight="fill" size={22} color="white" />
          </ShoppingButton>
        </BuyingSection>
      </BuyingContainer>
    </CoffeeCardContainer>
  )
}
