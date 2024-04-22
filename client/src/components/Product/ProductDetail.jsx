import React from 'react';
import styles from '../../styles/Product.module.css';

const ProductDetail = ({ product }) => {
  return (
    <>
      <div className={styles.productDetail}>
        <a className={styles.productLink} href='/'><h2 className={styles.productName}>{product.name}</h2></a>
        <p className={styles.productDescription}>{product.description}</p>
      </div>
      <div className={styles.productDropline}>
        <div className={styles.productPrice}>${product.price}</div>
        <button className={styles.productButtons} onClick={() => console.log(`Added ${product.name} to favorite`)}>
          <i className="fa-solid fa-heart"></i>
        </button>
        <button className={styles.productButtons} onClick={() => console.log(`Added ${product.name} to cart`)}>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
