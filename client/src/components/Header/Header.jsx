import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "./SearchBar";
import CartWidget from "../Cart/CartWidget";
import main from '../../styles/App.module.css';
import { GB, UA, RU } from 'country-flag-icons/react/3x2';
import getSymbolFromCurrency from 'currency-map-symbol';
import styles from '../../styles/Header.module.css';
import HeaderSubContent from "./HeaderSubContent";

const Header = () => {

    const logged = false;
    const language = 'ukrainian';
    const currency = 'uah';

    return (
        <header className={`${styles.header}`} id={"main--header"}>
            <HeaderSubContent />
            <div className={main.wrapper}>
                <div className={styles.headerContent}>
                    <Logo />
                    <SearchBar />
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default Header;