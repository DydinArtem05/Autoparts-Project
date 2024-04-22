// productActions.js
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './productTypes';

// Пример асинхронного действия для загрузки продуктов
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      // Диспатчим запрос на начало загрузки
      dispatch({ type: FETCH_PRODUCTS_REQUEST });

      // Здесь могут быть асинхронные запросы к серверу для загрузки продуктов
      // В этом примере предполагается, что данные о продуктах успешно получены с сервера
      const products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        // Добавьте другие продукты при необходимости
      ];

      // Диспатчим успешное действие с полученными данными
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: { products } });
    } catch (error) {
      // Диспатчим действие при ошибке
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: { error: 'Failed to fetch products' } });
    }
  };
};
