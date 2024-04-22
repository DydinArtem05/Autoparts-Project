// cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';

// Действие для добавления продукта в корзину
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: { product },
  };
};

// Действие для удаления продукта из корзины
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { productId },
  };
};
