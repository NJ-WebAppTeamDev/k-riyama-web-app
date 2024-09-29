import style from '../components/BackTop.module.css';
import Link from 'next/link';

function BackTop() {
  return (
    <div className={style.backtop}>
      <Link href="/" className={style.link}>
        最初の画面へ戻る
      </Link>
    </div>
  );
}

export default BackTop;
