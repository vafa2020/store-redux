import { ADD_TO_CART, DECREMENT } from "./cartType";

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const updatedCart = [...state.cart];
      const indexProduct = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexProduct < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      }
      const product = { ...updatedCart[indexProduct] };
      product.quantity++;
      updatedCart[indexProduct] = product;
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
      };
    }
    case DECREMENT: {
      const updatedCart = [...state.cart];
      const indexProduct = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const product = { ...updatedCart[indexProduct] };
      if (product.quantity === 1) {
        const removedProduct = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          cart: removedProduct,
          total: state.total - action.payload.offPrice,
        };
      }
      product.quantity--;
      updatedCart[indexProduct] = product;
      return {
        cart: updatedCart,
        total: state.total - action.payload.offPrice,
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
