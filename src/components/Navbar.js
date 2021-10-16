import React from 'react';
import styles from "./Navbar.module.css";
import logo from "../img/Logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li> <Link to="/"> Home page </Link> </li>
                    <li> <Link to="/Products"> products </Link> </li>
                    <li> <Link to="/About"> about us </Link> </li>
                </ul>
            </div>
            <div>
                <img className={styles.logo} src={logo} alt="logo"/>
            </div>
        </header>
    );
};

export default Navbar;