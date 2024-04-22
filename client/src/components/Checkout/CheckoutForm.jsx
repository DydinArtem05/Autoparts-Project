// components/Checkout/CheckoutForm.js
import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, address });
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Checkout Information</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Address:</label>
      <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
      <button type="submit">Complete Purchase</button>
    </form>
  );
};

export default CheckoutForm;
