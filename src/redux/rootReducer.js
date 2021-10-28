import { combineReducers } from "redux";
import cartReducer from "./Cart/cart-reducer";

const rootReducer = combineReducers({
  shop: cartReducer,
});

export default rootReducer;
