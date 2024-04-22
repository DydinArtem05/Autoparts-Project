// components/Footer/ContactInfo.js
import React from 'react';
import styles from '../../styles/Footer.module.css'

const ContactInfo = () => {
  return (
    <div className={styles.footerInfo}>
      <h4>Контактная информация</h4>
      <p>123 Main Street, Cityville</p>
      <p>Почта: <a href="mailto:autopartsinvolved.com">autopartsinvolved.com</a></p>
      <p>Телефон: <a href="tel:+380639607501">+38 (063) 960 7501</a></p>
    </div>
  );
};

export default ContactInfo;
