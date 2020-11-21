import * as actions from './actiontype'

export const increaseItem = id => ({
   type: actions.INCREASE_ITEM,
   payload: {
      id
   }
})
export const decreaseItem = id => ({
   type: actions.DECREASE_ITEM,
   payload: {
      id
   }
})
export const removeItem = id => ({
   type: actions.REMOVE_ITEM,
   payload: {
      id
   }
})
export const computeCart = () => ({
   type: actions.CALC_CART,
})
export const clearCart = () => ({
   type: actions.CLEAR_CART,
})

