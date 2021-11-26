import { ADD_TO_CART, DECREMENT } from "./cartType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const decrement = (product) => {
  return {
    type: DECREMENT,
    payload: product,
  };
};
