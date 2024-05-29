import americano from '../assets/coffee_imgs/Americano.svg'
import arabe from '../assets/coffee_imgs/Árabe.svg'
import cafeComLeite from '../assets/coffee_imgs/Café com Leite.svg'
import cafeGelado from '../assets/coffee_imgs/Café Gelado.svg'
import capuccino from '../assets/coffee_imgs/Capuccino.svg'
import chocolateQuente from '../assets/coffee_imgs/Chocolate Quente.svg'
import cubano from '../assets/coffee_imgs/Cubano.svg'
import expressoCremoso from '../assets/coffee_imgs/Expresso Cremoso.svg'
import expresso from '../assets/coffee_imgs/Expresso.svg'
import havaiano from '../assets/coffee_imgs/Havaiano.svg'
import irlandes from '../assets/coffee_imgs/Irlandês.svg'
import latte from '../assets/coffee_imgs/Latte.svg'
import macchiato from '../assets/coffee_imgs/Macchiato.svg'
import mocaccino from '../assets/coffee_imgs/Mochaccino.svg'

export function getCoffeeImage(name: string) {
  switch (name) {
    case 'Expresso Americano':
      return americano
    case 'Expresso Tradicional':
      return expresso
    case 'Árabe':
      return arabe
    case 'Café com Leite':
      return cafeComLeite
    case 'Expresso Gelado':
      return cafeGelado
    case 'Capuccino':
      return capuccino
    case 'Chocolate Quente':
      return chocolateQuente
    case 'Cubano':
      return cubano
    case 'Expresso Cremoso':
      return expressoCremoso
    case 'Havaiano':
      return havaiano
    case 'Irlandês':
      return irlandes
    case 'Latte':
      return latte
    case 'Macchiato':
      return macchiato
    case 'Mocaccino':
      return mocaccino
    default:
      return ''
  }
}
