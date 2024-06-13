import { createContext, ReactNode } from 'react'

interface Coffee {
  name: string
  price: number
  quantity: number
}

interface SelectedCoffeesContextType {
  selectedCoffees: Coffee[]
  addNewCoffee: (data: Coffee[]) => void
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
  function addNewCoffee(data: Coffee[]) {
    return data
  }

  return (
    <SelectedCoffeesContext.Provider
      value={{
        selectedCoffees: [],
        addNewCoffee,
      }}
    >
      {children}
    </SelectedCoffeesContext.Provider>
  )
}
