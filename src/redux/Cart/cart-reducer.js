import * as actionTypes from "./cart-types";

const INITIAL_STATE = {
  cart: {
    products: [],
    quantity: 0,
    total: 0,
  },
};

const cartReducer = (state = INITIAL_STATE, action) => {
  let inCart = false;
  let cartProducts = state.cart.products;
  let sum = 0;
  let multiply = 0;

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      inCart = state.cart.products.find(
        (item) => item.id === action.payload.product.id
      );

      if (inCart) {
        cartProducts = state.cart.products.map((item) =>
          item.id === action.payload.product.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                totalPrice:
                  (item.quantity + action.payload.quantity) * item.price,
              }
            : item
        );
      } else {
        cartProducts.push({
          ...action.payload.product,
          quantity: action.payload.quantity,
          totalPrice: action.payload.quantity * action.payload.product.price,
        });
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          products: cartProducts,
          quantity: state.cart.quantity + action.payload.quantity,
        },
      };
    case actionTypes.REMOVE_FROM_CART:
      inCart = state.cart.products.find(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.filter(
            (item) => item.id !== action.payload.id
          ),
          quantity: inCart ? state.cart.quantity - inCart.quantity : 0,
        },
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.map((item) => {
            if (item.id === action.payload.id) {
              sum = item.quantity + action.payload.qty;
              multiply = sum > 0 ? sum : 1;
              return {
                ...item,
                quantity: multiply,
                totalPrice: multiply * item.price,
              };
            }
            return item;
          }),
          quantity:
            state.cart.quantity + action.payload.qty > 0
              ? state.cart.quantity + action.payload.qty
              : 1,
        },
      };
    case actionTypes.CLEAN_CART:
      return {
        cart: {
          products: [],
          quantity: 0,
          total: 0,
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
