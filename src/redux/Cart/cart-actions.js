import * as actionTypes from "./cart-types";

const addToCart = (itemId) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id: itemId,
  },
});

const removeFromCart = (itemId) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id: itemId,
  },
});

const adjustItemQty = (itemId, value) => ({
  type: actionTypes.ADJUST_ITEM_QTY,
  payload: {
    id: itemId,
    qty: value,
  },
});

export { addToCart, removeFromCart, adjustItemQty };
