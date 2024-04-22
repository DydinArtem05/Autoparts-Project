// services/productService.js
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

const productApi = axios.create({
  baseURL: API_BASE_URL,
});

export const getProductList = () => {
  return productApi.get('/products');
};

export const getProductDetails = (productId) => {
  return productApi.get(`/products/${productId}`);
};

// Дополнительные методы для работы с продуктами
