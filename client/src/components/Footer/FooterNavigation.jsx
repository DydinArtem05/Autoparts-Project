// components/Footer/FooterNavigation.js
import React from 'react';
import styles from '../../styles/Footer.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {ROLE} from '../../constants/actionTypes'
const FooterNavigation = () => {

  const { role } = useSelector(s => s.ProfileReducer)
  const { isAuth } = useSelector(s => s.AuthReducer)

  console.log(role, isAuth);

  return (
    <div className={styles.footerInfo}>
      <h4>Быстрые ссылки</h4>
      <p><a href="/">Главная</a></p>
      <p><Link to="/catalog">Каталог</Link></p>
      <p><a href="/contact">Контакты</a></p>
      <p><a href="/terms">Условия оказания услуг</a></p>
      <p><a href="/privacy">Политика безопасности</a></p>
    </div>
  );
};

export default FooterNavigation;
