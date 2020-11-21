import * as actions from "./actiontype";

const initialState = {
  cart: [],
  totalQty: 0,
  totalAmount: 0,
  loading: true,
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREASE_ITEM: {
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    }
    case actions.DECREASE_ITEM: {
      let tempCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        })
        .filter((el) => el.qty !== 0);
      return { ...state, cart: tempCart };
    }
    case actions.REMOVE_ITEM: {
      const tempCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: tempCart };
    }
    case actions.CLEAR_CART: {
      return { ...state, cart: [], totalQty: 0, totalAmount: 0 };
    }
    case actions.CALC_CART: {
      const { totalQty, totalAmount } = state.cart.reduce(
        (total, item) => {
          let { qty, price } = item;
          total.totalQty += qty;
          total.totalAmount += price * qty;
          return total;
        },
        { totalQty: 0, totalAmount: 0 }
      );
      return { ...state, totalQty, totalAmount: totalAmount.toLocaleString() };
    }
    case actions.FETCH_ITEM_REQUEST:
      return { ...state, loading: true, error: '' };
    case actions.FETCH_ITEM_SUCCESS:
      return { ...state, cart: action.payload.cart, loading: false, error: '' };
    case actions.FETCH_ITEM_FAILURE:
      return { ...state, cart: [], loading: false, error: action.payload.error };

    default:
      return state;
  }
};


export default reducer;
