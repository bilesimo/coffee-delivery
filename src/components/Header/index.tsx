import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import {
  HeaderContainer,
  RightInfo,
  ShoppingCartContainer,
  RegionContainer,
} from './styles'
import { useContext } from 'react'
import { SelectedCoffeesContext } from '../../context/SelectedCoffeesContext'

export function Header() {
  const { selectedCoffees } = useContext(SelectedCoffeesContext)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeeDelivery} height={40} alt="" />
      </Link>
      <RightInfo>
        <RegionContainer>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </RegionContainer>
        <Link to="/checkout">
          <ShoppingCartContainer>
            <ShoppingCart size={22} weight="fill" />
            <div>{selectedCoffees.length}</div>
          </ShoppingCartContainer>
        </Link>
      </RightInfo>
    </HeaderContainer>
  )
}
