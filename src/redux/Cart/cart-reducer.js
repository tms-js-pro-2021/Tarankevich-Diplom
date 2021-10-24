import * as actionTypes from "./cart-types";

const INITIAL_STATE = {
  cart: {
    products: [],
    quantity: 0,
    total: 0,
  },
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // const inCart = state.cart.find((item) =>
      //   item.id === action.payload.id ? true : false
      // );
      // return {
      //   ...state,
      //   cart: inCart
      //     ? state.cart.map((item) =>
      //         item.id === action.payload.id
      //           ? { ...item, qty: item.qty + 1 }
      //           : item
      //       )
      //     : [...state.cart, { ...item, qty: 1 }],
      // };
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: { quantity: state.cart.quantity + 1 },
      };
    default:
      return state;
  }
};

export default cartReducer;
