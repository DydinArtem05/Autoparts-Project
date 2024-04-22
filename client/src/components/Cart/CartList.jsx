// components/Cart/CartList.js
import React from 'react';
import CartItem from './CartItem';

const CartList = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="cart-list">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  );
};

export default CartList;
