"use client";
import styles from '../components/buger.module.css';

export default function Home() {
  return (
      <header>
        <div className={styles.hamburgerMenu}>
          <input type="checkbox" id="menu-btn-check" className={styles.menuBtnCheck} />
          <label htmlFor="menu-btn-check" className={styles.menuBtn}><span></span></label>
          <div className={styles.menuContent}>
            <ul>
              <li><a href="#">ホーム</a></li>
              <li><a href="#">使い方</a></li>
              <li><a href="#">お問い合わせ</a></li>
              <li><a href='#'>ライセンス</a></li>
            </ul>
          </div>
        </div>
        <div className = "App">
          <img src="./frontend/src/app/images/icon.jpg" className="App-logo" alt="logo"/>
        </div>
      </header>
    );
  } 