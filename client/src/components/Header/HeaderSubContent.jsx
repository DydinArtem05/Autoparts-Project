import React from "react";
import { GB, UA, RU } from 'country-flag-icons/react/3x2';
import getSymbolFromCurrency from 'currency-map-symbol';
import styles from '../../styles/Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import {AuthHttp} from '../../http/AuthHttp';
import { authentication } from '../../reducers/AuthReducer'
import { setProfileDefaultData } from '../../reducers/ProfileReducer'


const HeaderSubContent = () => {

    const logged = false;
    const language = 'ukrainian';
    const currency = 'uah';

    const { isAuth } = useSelector(s => s.AuthReducer)
    const { name } = useSelector(s => s.ProfileReducer)
    const dispatch = useDispatch()

    const logout = async () => {
        try {
            await AuthHttp.logout()
            dispatch(authentication({isAuth:false}))
            dispatch(setProfileDefaultData())
            localStorage.setItem("accessToken",'');
        } catch (error) {
            
        }
    }

    return (
        <div className={styles.headerSubContent}>
            <div className={styles.headerSubContent_ToLeft}>
                {currency === "uah"
                    ? <button className={styles.serviceButton}>
                        {getSymbolFromCurrency('UAH')}
                        <span>UAH</span>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                    : <button className={styles.serviceButton}>
                        {getSymbolFromCurrency('USD')}
                        <span>USD</span>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                }
                {language === "english"
                    ? <button className={styles.serviceButton}>
                        <GB className={styles.serviceButton_Flag} />
                        <span>Language</span>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                    : language === "ukrainian"
                        ? <button className={styles.serviceButton}>
                            <UA className={styles.serviceButton_Flag} />
                            <span>Мова</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                        : <button className={styles.serviceButton}>
                            <RU className={styles.serviceButton_Flag} />
                            <span>Язык</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                }
            </div>
            <div className={styles.headerSubContent_ToRight}>
                <a href="/cart"> <i className="fa-solid fa-cart-shopping"></i> Cart</a>
                <a href="/wishlist"><i className="fa-solid fa-heart"></i> Wishlist (0)</a>
                {isAuth ? (
                    <>
                        <a href="/profile"><i className="fa-regular fa-user"></i> {name}</a>
                        <button  onClick={() => logout()}><i className="fa-regular fa-sign-out"></i> Logout</button>
                    </>
                ) : (
                    <a href="/login"><i className="fa-regular fa-user"></i> My account</a>
                )}
            </div>
        </div>
    )
}

export default HeaderSubContent;