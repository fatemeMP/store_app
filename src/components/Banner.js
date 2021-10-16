import React from 'react';
import styles from "./Banner.module.css"
import banner from "../img/banner.jpg"

const Banner = () => {
    return (
        <div>
            <div className={styles.container}>
                 <img src={banner} alt="banner"/>
                    <div className={styles.textContainer}>  
                         <h1>wellcome to my app</h1>
                         <br/>
                              <span>FATEMEH MALEKPOOR</span>
                     </div>
            </div>
        </div>
    );
};

export default Banner;