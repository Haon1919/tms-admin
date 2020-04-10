import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.scss';

export const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const location = useLocation();

    useEffect(() => setToggleMenu(false), [location]);

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
                    <li>
                        <Link to="/">Landing</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Resources">Resources</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                    <li>
                        <Link to="/">Landing</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Resources">Resources</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
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