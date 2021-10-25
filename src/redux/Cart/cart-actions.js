import * as actionTypes from "./cart-types";

const addToCart = (item, value) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    product: item,
    quantity: value,
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

const cleanCart = () => ({
  type: actionTypes.CLEAN_CART,
});

export { addToCart, removeFromCart, adjustItemQty, cleanCart };
