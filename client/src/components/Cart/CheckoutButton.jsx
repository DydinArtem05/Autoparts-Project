// components/Cart/CheckoutButton.js
import React from 'react';

const CheckoutButton = ({ onCheckoutClick }) => {
  return (
    <button onClick={onCheckoutClick}>Proceed to Checkout</button>
  );
};

export default CheckoutButton;
