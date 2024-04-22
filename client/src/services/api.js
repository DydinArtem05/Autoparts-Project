// services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProductList = () => {
  return api.get('/products');
};

export const addToCart = (productId, quantity) => {
  return api.post('/cart/add', { productId, quantity });
};

export const removeFromCart = (productId) => {
  return api.delete(`/cart/remove/${productId}`);
};

export const checkout = (checkoutData) => {
  return api.post('/checkout', { checkoutData });
};

// Дополнительные методы для работы с пользовательской аутентификацией и другими API запросами
