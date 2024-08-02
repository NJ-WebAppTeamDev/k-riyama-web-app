// src/components/Navbar.js
/*"use client";
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.menuToggle} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
            <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ''}`}>
                <li><a href="#">ホーム</a></li>
                <li><a href="#">使い方</a></li>
                <li><a href="#">お問い合わせ</a></li>
                <li><a href="#">ライセンス</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;*/

// src/components/Navbar.js
"use client";
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.menuToggle} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
            <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ''}`}>
                <li><a href="#">ホーム</a></li>
                <li><a href="#">使い方</a></li>
                <li><a href="#">お問い合わせ</a></li>
                <li><a href="#">ライセンス</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
