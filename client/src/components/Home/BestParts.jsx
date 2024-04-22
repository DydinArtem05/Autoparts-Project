import React from "react";
import styles from '../../styles/Home.module.css';

const BestParts = () => {
    return(
        <div className={styles.bestParts}>
            <div className={styles.bestPartsInternal}>
                <h4>Выбирай лучшие детали</h4>
                <p>Твой автомобиль должен быть обслужен деталями высокого качества</p>
            </div>
        </div>
    );
}

export default BestParts;