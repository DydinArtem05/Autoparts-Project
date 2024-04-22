// components/Checkout/Checkout.js
import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

const Checkout = ({ cartItems, onCheckout }) => {
  const [checkoutData, setCheckoutData] = useState(null);

  const handleCheckoutSubmit = (data) => {
    setCheckoutData(data);
    onCheckout(data);
  };

  return (
    <div className="checkout">
      <CheckoutForm onSubmit={handleCheckoutSubmit} />
      {checkoutData && <OrderSummary cartItems={cartItems} />}
    </div>
  );
};

export default Checkout;
