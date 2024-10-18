'use client';
import ReadQRCode from '@/components/ReadQRCode';
import Footer from '../components/Footer';
import style from './page.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ShowStampBoard from '@/components/ShowStampBoard';
import Header from '@/components/Header';

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
    <div>
      <Header />
      <div className={style.home}>
        <Image
          className={style.tutorial_image}
          src="/images/main_visual.png"
          alt="main_visual"
          height={200}
          width={300}
          style={{ width: '100%', height: '100%' }}
        />
        <div className={style.tutorial}>
          <h2>アプリの使い方</h2>
          <div className={style.tutorial_item__wrapper}>
            <div className={style.tutorial_item}>
              <Image
                className={style.tutorial_image}
                src="/images/tuto_01.png"
                alt="test"
                height={100}
                width={100}
              />
              <p className={style.tutorial_description}>
                QRコードを読み取って、 郡山市の施設情報をゲット
              </p>
            </div>
            <div className={style.tutorial_item}>
              <Image
                className={style.tutorial_image}
                src="/images/tuto_02.png"
                alt="test"
                height={100}
                width={100}
              />
              <p className={style.tutorial_description}>
                QRコード1枚を読み取るにつき、パネルを1枚ゲット
              </p>
            </div>
            <div className={style.tutorial_item}>
              <Image
                className={style.tutorial_image}
                src="/images/tuto_03.png"
                alt="test"
                height={100}
                width={100}
              />
              <p className={style.tutorial_description}>
                計9枚のパネルを集めて、スタンプボードの絵を完成させよう
              </p>
            </div>
            <div className={style.tutorial_item}>
              <Image
                className={style.tutorial_image}
                src="/images/tuto_04.png"
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
    </div>
  );
}
export default Home;
