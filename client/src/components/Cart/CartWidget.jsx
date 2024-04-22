import React from "react";
import styles from '../../styles/Cart.module.css';

const CartWidget = () => {
    return (
        <div className={styles.cartWidget}>
            <div className={styles.cartWidget_container}>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className={styles.productQuantity}>0</div>
            </div>
            <div className={styles.cartWidget_Info}>
                <div className={styles.cartWidget_name}>Корзина</div>
                <div className={styles.cartWidgetPrice}>0 $</div>
            </div>

        </div >
    );
}

export default CartWidget;