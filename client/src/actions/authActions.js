// authActions.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE } from './authTypes';

// Пример асинхронного действия для входа в систему
export const login = (credentials) => {
  return async (dispatch) => {
    try {
      // Здесь могут быть асинхронные запросы к серверу для аутентификации
      // В этом примере предполагается, что данные о пользователе успешно получены с сервера
      const user = { username: 'exampleUser' };

      // Диспатчим успешное действие
      dispatch({ type: LOGIN_SUCCESS, payload: { user } });
    } catch (error) {
      // Диспатчим действие при ошибке
      dispatch({ type: LOGIN_FAILURE, payload: { error: 'Authentication failed' } });
    }
  };
};

export const register = (userData) => {
  return async (dispatch) => {
    try {
      // Here, you might make an asynchronous request to the server to register the user
      // For simplicity, let's assume the registration is successful
      const user = { username: userData.username };

      // Dispatch a success action
      dispatch({ type: REGISTER_SUCCESS, payload: { user } });
    } catch (error) {
      // Dispatch a failure action in case of an error
      dispatch({ type: REGISTER_FAILURE, payload: { error: 'Registration failed' } });
    }
  };
};

// Действие для выхода из системы
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
