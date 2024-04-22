// services/cartService.js
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

const cartApi = axios.create({
  baseURL: API_BASE_URL,
});

export const getCartItems = () => {
  return cartApi.get('/cart');
};

export const addToCart = (productId, quantity) => {
  return cartApi.post('/cart/add', { productId, quantity });
};

export const removeFromCart = (productId) => {
  return cartApi.delete(`/cart/remove/${productId}`);
};

// Дополнительные методы для работы с корзиной
