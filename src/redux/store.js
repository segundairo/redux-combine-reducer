import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import cartReducer from "./cart/reducer";
const store = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
