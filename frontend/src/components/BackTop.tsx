import style from '../components/BackTop.module.css';
import Link from 'next/link';

function BackTop() {
  return (
    <div>
      <Link href="/" className={style.link}>
        <div className={style.backtop}>最初の画面へ戻る</div>
      </Link>
    </div>
  );
}

export default BackTop;
