import React from 'react';
import styles from "./Logos.module.css";
import apple from "../img/apple.jpg";
import samsung from "../img/samsung.jpg";
import xiaomi from "../img/xiaomi.png";



const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>The best in the world</h3>
                <img src={apple} alt="apple"/>
                <img src={samsung} alt="samsung"/>
                <img src={xiaomi} alt="xiaomi"/>
        </div>
    );
};

export default Logos;