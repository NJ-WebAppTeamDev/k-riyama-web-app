'use client';
import ReadQRCode from '@/components/ReadQRCode';
import Footer from '../components/Footer';
import style from './page.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ShowStampBoard from '@/components/ShowStampBoard';

function Home() {
  const [stampsList, setStampsList] = useState<string[]>([]);
  /*カメラコンポーネントを再レンダリング*/
  const [reloadKey, setReloadKey] = useState(0);
  const reloadComponent = () => {
    setReloadKey((reloadKey) => reloadKey + 1);
  };
  /*ローカルストレージに保存されているスタンプを読み込み*/
  useEffect(() => {
    const storedStamps = localStorage.getItem('stamps');
    if (storedStamps) {
      setStampsList(JSON.parse(storedStamps));
    }
  }, []);
  return (
    <div className={style.home}>
      <header>header</header>
      <div className={style.emptybox}></div>
      <div className={style.tutorial}>
        <h2>アプリの使い方</h2>
        <div className={style.tutorial_item__wrapper}>
          <div className={style.tutorial_item}>
            <Image
              className={style.tutorial_image}
              src="/mock/100x100.png"
              alt="test"
              height={100}
              width={100}
            />
            <p className={style.tutorial_description}>地図上のQRコードを読み取ってパネルをゲット</p>
          </div>
          <div className={style.tutorial_item}>
            <Image
              className={style.tutorial_image}
              src="/mock/100x100.png"
              alt="test"
              height={100}
              width={100}
            />
            <p className={style.tutorial_description}>
              合計9枚のパネルを集めてスタンプボードの絵を完成させよう
            </p>
          </div>
          <div className={style.tutorial_item}>
            <Image
              className={style.tutorial_image}
              src="/mock/100x100.png"
              alt="test"
              height={100}
              width={100}
            />
            <p className={style.tutorial_description}>完成した絵をスタッフに見せて景品ゲット</p>
          </div>
        </div>
      </div>

      <div className={style.qr_reader}>
        <h2>QRコードを読み取る</h2>
        <ReadQRCode
          key={reloadKey}
          stampsList={stampsList}
          setStampsList={setStampsList}
          reloadComponent={reloadComponent}
        />
      </div>

      <div className={style.stamp}>
        <h2>スタンプボード</h2>
        <ShowStampBoard stampsList={stampsList} />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
