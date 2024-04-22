// checkoutActions.js
import { SET_SHIPPING_INFO, SET_PAYMENT_METHOD, COMPLETE_ORDER, RESET_CHECKOUT } from './checkoutTypes';

// Действие для установки информации о доставке
export const setShippingInfo = (shippingInfo) => {
  return {
    type: SET_SHIPPING_INFO,
    payload: { shippingInfo },
  };
};

// Действие для установки способа оплаты
export const setPaymentMethod = (paymentMethod) => {
  return {
    type: SET_PAYMENT_METHOD,
    payload: { paymentMethod },
  };
};

// Действие для завершения заказа
export const completeOrder = () => {
  return {
    type: COMPLETE_ORDER,
  };
};

// Действие для сброса состояния оформления заказа
export const resetCheckout = () => {
  return {
    type: RESET_CHECKOUT,
  };
};
