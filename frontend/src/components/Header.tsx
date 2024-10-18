import style from './Header.module.css';
import styles from '../components/buger.module.css';
import Image from 'next/image';
import logo from '../../public/images/logo_v2.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className="App">
        <Image src={logo} alt="Logo" width={200} height={90} />
      </div>
      <div>
        <input
          type="checkbox"
          id="menu-btn-check"
          className={styles.menuBtnCheck}
          title="メニューの開閉"
        />
        <label htmlFor="menu-btn-check" className={styles.menuBtn}>
          <span></span>
        </label>
        <div className={styles.menuContent}>
          <ul>
            <li>
              <a href="/">ホーム</a>
            </li>
            <li>
              <a href="#">使い方</a>
            </li>
            <li>
              <a href="#">お問い合わせ</a>
            </li>
            <li>
              <a href="#">ライセンス</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
