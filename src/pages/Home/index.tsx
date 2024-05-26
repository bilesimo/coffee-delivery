import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import imageCoffee from '../../assets/coffee.svg'
import {
  HomeContainer,
  InfoRegion,
  Titles,
  ListOfDiffs,
  PurpleContainer,
  YellowContainer,
  GrayContainer,
  YellowDarkContainer,
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
              <YellowDarkContainer>
                <ShoppingCart weight="fill" size={16} color="white" />
              </YellowDarkContainer>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <GrayContainer>
                <Package weight="fill" size={16} color="white" />
              </GrayContainer>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <YellowContainer>
                <Timer weight="fill" size={16} color="white" />
              </YellowContainer>
              <span>Entrega rápida e rastrada</span>
            </li>
            <li>
              <PurpleContainer>
                <Coffee weight="fill" size={16} color="white" />
              </PurpleContainer>
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
