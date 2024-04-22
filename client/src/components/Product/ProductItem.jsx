import React from 'react';
import ProductDetail from './ProductDetail';
import styles from '../../styles/Product.module.css';
import noProduct from '../../assets/images/default/noProductImage.jpeg';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.productItem}>
        <div className={styles.productImage}>
          <img src={product.image?.length == 0 ? noProduct : product.image}/>
        </div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductItem;
