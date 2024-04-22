// components/Header/Logo.js
import React from 'react';
import logo from '../../assets/images/HomePage/logo.png';
import styles from '../../styles/Header.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <a href='/'><img src={logo} alt="Autoparts" /></a>
    </div>
  );
};

export default Logo;
