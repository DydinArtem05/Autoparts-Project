import React from "react";
import styles from '../../styles/Product.module.css';
import ProductItem from "./ProductItem";

const ProductPage = (props) => {
    return (
        <div className={styles.productPage}>
            {props.products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductPage;