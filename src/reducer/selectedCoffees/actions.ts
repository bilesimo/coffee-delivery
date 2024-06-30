import { StateItemType } from './reducer'

export enum ActionTypes {
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
}

export function increaseQuantityAction(item: StateItemType) {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    payload: item,
  }
}

export function decreaseQuantityAction(item: StateItemType) {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: item,
  }
}
