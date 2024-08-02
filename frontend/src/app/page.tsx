import style from "./page.module.css";
import Image from "next/image";
function Home() {
  return (
    <div className={style.home}>
      <header>header</header>
      <div className={style.tutorial}>
        <h2>アプリの使い方</h2>
        <div className={style.tutorial_item}>
          <Image src="/mock/100x100.png" alt="test" height={100} width={100} />
          <p className={style.tutorial_description}>
            地図上のQRコードを読み取ってパネルをゲット
          </p>
        </div>
        <div className={style.tutorial_item}>
          <Image src="/mock/100x100.png" alt="test" height={100} width={100} />
          <p className={style.tutorial_description}>
            合計9枚のパネルを集めてスタンプボードの絵を完成させよう
          </p>
        </div>
        <div className={style.tutorial_item}>
          <Image src="/mock/100x100.png" alt="test" height={100} width={100} />
          <p className={style.tutorial_description}>
            完成した絵をスタッフに見せて景品ゲット
          </p>
        </div>
      </div>
      <div className={style.stump}>
        <h2>スタンプボード</h2>
      </div>
      <footer>footer</footer>
    </div>
  );
}
export default Home;
