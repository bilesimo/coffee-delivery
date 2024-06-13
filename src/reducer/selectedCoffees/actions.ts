import { StateItemType } from './reducer'

export enum ActionTypes {
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
}

export function increaseQuantity(item: StateItemType) {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    payload: {
      item,
    },
  }
}

export function decreaseQuantity(item: StateItemType) {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: {
      item,
    },
  }
}
