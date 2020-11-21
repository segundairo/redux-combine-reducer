import axios from "axios";
import * as actions from "./actiontype";
 
export const increaseItem = (id) => ({
  type: actions.INCREASE_ITEM,
  payload: {
    id,
  },
});
export const decreaseItem = (id) => ({
  type: actions.DECREASE_ITEM,
  payload: {
    id,
  },
});
export const removeItem = (id) => ({
  type: actions.REMOVE_ITEM,
  payload: {
    id,
  },
});
export const computeCart = () => ({
  type: actions.CALC_CART,
});
export const clearCart = () => ({
  type: actions.CLEAR_CART,
});

export const fetchCartRequest = () => ({ type: actions.FETCH_ITEM_REQUEST });

export const fetchCartSuccess = (cart) => ({
  type: actions.FETCH_ITEM_SUCCESS,
  payload: {
    cart,
  },
});
export const fetchCartFailure = (error) => ({
  type: actions.FETCH_ITEM_FAILURE,
  payload: {
    error,
  },
});

export const fetchCart = () => {
  return (dispatch) => {
    dispatch(fetchCartRequest());
    axios
      .get("data.json")
      .then((response) => {
        const data = response.data;
        dispatch(fetchCartSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCartFailure( errorMsg));
      });
  };
};
