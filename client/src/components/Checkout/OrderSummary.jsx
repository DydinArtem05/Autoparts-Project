// components/Checkout/OrderSummary.js
import React from 'react';

const OrderSummary = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default OrderSummary;
