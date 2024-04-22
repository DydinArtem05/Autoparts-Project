// services/authService.js
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

const authApi = axios.create({
  baseURL: API_BASE_URL,
});

export const login = (credentials) => {
  return authApi.post('/login', credentials);
};

export const register = (userData) => {
  return authApi.post('/register', userData);
};

export const logout = () => {
  // Реализация выхода из системы
};

export const getUserProfile = () => {
  // Получение профиля пользователя
};
