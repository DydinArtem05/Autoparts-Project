// components/Cart/Cart.js
import React from 'react';
import CartList from './CartList';
import CheckoutButton from './CheckoutButton';

const Cart = ({ cartItems, onRemoveItem, onCheckout }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <CartList cartItems={cartItems} onRemoveItem={onRemoveItem} />
      {cartItems?.length > 0 && <CheckoutButton onCheckoutClick={onCheckout} />}
    </div>
  );
};

export default Cart;
