// components/Header/SearchBar.js
import React from 'react';
import styles from '../../styles/Header.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Поиск товаров" />
      <button type="button" className={`${styles.searchButton} fa-solid fa-magnifying-glass`}></button>
    </div>
  );
};

export default SearchBar;
