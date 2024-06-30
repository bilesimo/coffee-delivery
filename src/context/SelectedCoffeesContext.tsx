import { createContext, useReducer, ReactNode, useEffect } from 'react'
import { selectedCoffeesReducer } from '../reducer/selectedCoffees/reducer'
import {
  decreaseQuantityAction,
  increaseQuantityAction,
} from '../reducer/selectedCoffees/actions'

interface Coffee {
  name: string
  price: number
  quantity: number
}

interface SelectedCoffeesContextType {
  selectedCoffees: Coffee[]
  addNewCoffee: (data: Coffee) => void
  removeCoffee: (data: Coffee) => void
}

export const SelectedCoffeesContext = createContext(
  {} as SelectedCoffeesContextType,
)

interface SelectedCoffeesProviderProps {
  children: ReactNode
}

export function SelectedCoffeesProvider({
  children,
}: SelectedCoffeesProviderProps) {
  const [selectedCoffees, dispatch] = useReducer(
    selectedCoffeesReducer,
    [],
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@rocketseat-coffee-delivery:selected-coffees-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    },
  )

  useEffect(() => {
    localStorage.setItem(
      '@rocketseat-coffee-delivery:selected-coffees-1.0.0',
      JSON.stringify(selectedCoffees),
    )
  }, [selectedCoffees])

  function addNewCoffee(data: Coffee) {
    dispatch(increaseQuantityAction(data))
  }

  function removeCoffee(data: Coffee) {
    dispatch(decreaseQuantityAction(data))
  }

  console.log(selectedCoffees)

  return (
    <SelectedCoffeesContext.Provider
      value={{
        selectedCoffees,
        addNewCoffee,
        removeCoffee,
      }}
    >
      {children}
    </SelectedCoffeesContext.Provider>
  )
}
