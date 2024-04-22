import React from 'react';
import styles from '../../styles/Paginator.module.css';

const Paginator = ({ productsAmount, productsPageAmount, currentPage, setCurrentPage }) => {

    

    const pagesQuantity = Math.ceil(productsAmount / productsPageAmount);

    let pagesArr = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pagesArr.push(i);
    }

    return (

        <div className={styles.paginator}>
            <span className={styles.lowPage}></span>
            {pagesArr.map(page => {
                return <span key={page}
                    className={currentPage === page ? styles.paginatorItems + " " + styles.currentPage : styles.paginatorItems}
                    onClick={() => setCurrentPage(page)}>
                    {page}
                </span>
            })}
            <span className={styles.upPage}></span>
        </div>
    )
};

export default Paginator;
