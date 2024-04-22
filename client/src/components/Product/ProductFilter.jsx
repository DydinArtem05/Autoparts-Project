// components/Product/ProductFilter.js
import React from 'react';

const ProductFilter = ({ categories, onFilterChange }) => {
  return (
    <div className="product-filter">
      <label>Filter by Category:</label>
      <select onChange={e => onFilterChange(e.target.value)}>
        <option value="">All</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
