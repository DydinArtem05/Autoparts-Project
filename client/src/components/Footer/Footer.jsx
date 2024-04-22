// components/Footer/Footer.js
import React from 'react';
import ContactInfo from './ContactInfo';
import SocialMediaLinks from './SocialMediaLinks';
import FooterNavigation from './FooterNavigation';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer  id={"main--footer"}>
      <div className={styles.footerContainer}>
        <ContactInfo />
        <SocialMediaLinks />
        <FooterNavigation />
      </div>
    </footer>
  );
};

export default Footer;
