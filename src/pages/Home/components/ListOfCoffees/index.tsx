import { ListOfCoffeesContainer } from './styles'
import { CoffeeCard, CoffeeCardProps } from '../CoffeeCard/index'
import { CoffeeList } from '../../../../data/listOfCoffees'

export function ListOfCoffees() {
  return (
    <ListOfCoffeesContainer>
      <h1>Nossos cafés</h1>
      <section>
        {CoffeeList.map((coffee: CoffeeCardProps) => {
          return (
            <CoffeeCard
              key={coffee.name}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              tags={coffee.tags}
            />
          )
        })}
      </section>
    </ListOfCoffeesContainer>
  )
}
