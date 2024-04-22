import React from 'react';

const CartItem = ({ item, onRemoveItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => onRemoveItem(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;