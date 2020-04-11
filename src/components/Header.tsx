import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import styles from '../styles/Header.module.scss';

export const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        setToggleMenu(false)
    }, [pathname]);


    return (
        <section className={styles.header} id="header">
            <section className={styles.banner}>
                <div className={styles.hamburger_wrapper}>
                    <div
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={toggleMenu ? `${styles.hamburger} ${styles.menu_open}` : styles.hamburger}
                    >
                        <div className={styles.middle_bar}></div>
                    </div>
                </div>
                <div className={styles.title}>
                    <Link to="/">Twigg Music Studio</Link>
                </div>
            </section>
            <div className={toggleMenu ? `${styles.menu_pane} ${styles.menu_open}` : styles.menu_pane}>
                <ul className={styles.menu}>
                    <li className={styles.first_element}>
                        <NavLink exact to="/" activeClassName={styles.active}>Landing</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Funds" activeClassName={styles.active}>Funds</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Services" activeClassName={styles.active}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Payments" activeClassName={styles.active}>Payments</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Users" activeClassName={styles.active}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Calendar" activeClassName={styles.active}>Calendar</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Rentals" activeClassName={styles.active}>Landing</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Blog" activeClassName={styles.active}>Blog</NavLink>
                    </li>
                    <li className={styles.last_element}>
                        <NavLink exact to="/Charge" activeClassName={styles.active}>Charge</NavLink>
                    </li>
                </ul>
                <div
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className={styles.overlay}
                >
                </div>
            </div>
        </section>
    )
}