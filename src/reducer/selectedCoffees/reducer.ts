import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface StateItemType {
  name: string
  quantity: number
  price: number
}

interface ActionType {
  type: string
  payload: StateItemType
}

export function selectedCoffeesReducer(
  state: StateItemType[],
  action: ActionType,
) {
  switch (action.type) {
    case ActionTypes.INCREASE_QUANTITY:
      return produce(state, (draft) => {
        const coffeeIndex = draft.findIndex(
          (item) => item.name === action.payload.name,
        )
        if (coffeeIndex !== -1) {
          draft[coffeeIndex].quantity += 1
        } else {
          draft.push({
            name: action.payload.name,
            quantity: 1,
            price: action.payload.price,
          })
        }
      })

    case ActionTypes.DECREASE_QUANTITY:
      return produce(state, (draft) => {
        const coffeeIndex = draft.findIndex(
          (item) => item.name === action.payload.name,
        )
        if (coffeeIndex !== -1) {
          draft[coffeeIndex].quantity -= 1
          if (draft[coffeeIndex].quantity <= 0) {
            draft.splice(coffeeIndex, 1)
          }
        }
      })

    default:
      return state
  }
}
