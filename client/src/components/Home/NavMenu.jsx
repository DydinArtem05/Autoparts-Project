import React from "react";
import styles from '../../styles/Home.module.css';

const NavMenu = (props) => {
    return (
        <div className={styles.navmenu}>
            <div className={styles.navmenuContainer}>
                <a href="/" className={props.route !== '/' ? '' : styles.active}>Главная</a>
                <a href="/contact" className={props.route !== '/contact' ? '' : styles.active}>Контакты</a>
                <a href="/about" className={props.route !== '/about' ? '' : styles.active}>О нас</a>
            </div>
        </div>
    );
}

export default NavMenu;