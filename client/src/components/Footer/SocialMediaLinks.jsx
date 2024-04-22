// components/Footer/SocialMediaLinks.js
import React from 'react';
import styles from '../../styles/Footer.module.css'

const SocialMediaLinks = () => {
  return (
    <div className={styles.footerInfo}>
      <h4>Следите за нами</h4>
      <p><a href="https://facebook.com/myautoshop" target="_blank" rel="noopener noreferrer">Facebook</a></p>
      <p><a href="https://twitter.com/myautoshop" target="_blank" rel="noopener noreferrer">Twitter</a></p>
      <p><a href="https://instagram.com/myautoshop" target="_blank" rel="noopener noreferrer">Instagram</a></p>
    </div>
  );
};

export default SocialMediaLinks;
