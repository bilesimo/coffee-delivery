import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import imageCoffee from '../../assets/coffee.svg'
import {
  HomeContainer,
  InfoRegion,
  Titles,
  ListOfDiffs,
  IconContainer,
} from './styles'
import { ListOfCoffees } from './components/ListOfCoffees'

export function Home() {
  return (
    <div>
      <HomeContainer>
        <InfoRegion>
          <Titles>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Titles>
          <ListOfDiffs>
            <li>
              <IconContainer color={'yellow-dark'}>
                <ShoppingCart weight="fill" size={16} color="white" />
              </IconContainer>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <IconContainer color={'gray'}>
                <Package weight="fill" size={16} color="white" />
              </IconContainer>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <IconContainer color={'yellow'}>
                <Timer weight="fill" size={16} color="white" />
              </IconContainer>
              <span>Entrega rápida e rastrada</span>
            </li>
            <li>
              <IconContainer color={'purple'}>
                <Coffee weight="fill" size={16} color="white" />
              </IconContainer>
              <span>O café chega fresquinho até você</span>
            </li>
          </ListOfDiffs>
        </InfoRegion>
        <aside>
          <img src={imageCoffee} alt="Coffee cup" />
        </aside>
      </HomeContainer>
      <ListOfCoffees />
    </div>
  )
}
