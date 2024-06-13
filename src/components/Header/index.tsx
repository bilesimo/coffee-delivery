import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import {
  HeaderContainer,
  RightInfo,
  ShoppingCartContainer,
  RegionContainer,
} from './styles'

export function Header() {
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
            <div>2</div>
          </ShoppingCartContainer>
        </Link>
      </RightInfo>
    </HeaderContainer>
  )
}
