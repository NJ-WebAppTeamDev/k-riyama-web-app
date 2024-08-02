import style from "./Header.module.css";

function Header() {
  return (
  <header>
    <div className={style.test}>
      <p className={style.character}>LOGO</p>
    </div>
  </header>
  );
}

export default Header;