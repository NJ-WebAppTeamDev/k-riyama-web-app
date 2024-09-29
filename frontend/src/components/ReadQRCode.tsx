'use client';
import { useState } from 'react';
import { useZxing } from 'react-zxing';
import { useRouter } from 'next/navigation';
import style from './ReadQRCode.module.scss';

function ReadQRCode({
  stampsList,
  setStampsList,
  reloadComponent,
}: {
  stampsList: string[];
  setStampsList: (arg0: string[]) => void;
  reloadComponent: () => void;
}) {
  const router = useRouter();
  const [result, setResult] = useState('');
  const [cameraStatus, setCameraStatus] = useState(true); //true でカメラを止める
  const [isVisible, setIsVisible] = useState(true); //コンポーネント表示
  const [videoDisplayStatus, setVideoDisPlayStatus] = useState('none'); // カメラ映像を表示するvideo要素のdisplay属性
  const [buttonDisplayStatus, setButttonDisPlayStatus] = useState('inline-block'); // カメラを軌道するbutton要素のdisplay属性
  const { ref } = useZxing({
    paused: cameraStatus,
    onDecodeResult(result) {
      setResult(result.getText());
      console.log(result.getText());
      const blog_id_list: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (blog_id_list.includes(result.getText())) {
        addStamp(result.getText());
        setCameraStatus(true); //スタンプ保存後カメラをリセットさせる
        setIsVisible(false);

        // QRコードに対応したブログページに遷移
        router.push(`/blogs/${result.getText()}`);
      }
    },
  });

  /*読み込んだスタンプをローカルストレージに保存 */
  const addStamp = (newStamp: string) => {
    if (stampsList.includes(newStamp)) {
      alert('すでに読み込んだQRコードです');
      return;
    }
    const updatedStampsList = [...stampsList, newStamp];
    setStampsList(updatedStampsList);
    localStorage.setItem('stamps', JSON.stringify(updatedStampsList));
    alert('Add Stamp');
  };

  return (
    <>
      <video
        className={style.video}
        ref={ref}
        style={{
          display: videoDisplayStatus,
        }}
        playsInline
      />
      <button
        className={style.camera_start_button}
        style={{
          display: buttonDisplayStatus,
        }}
        onClick={() => {
          setCameraStatus(false);
          setVideoDisPlayStatus('inline');
          setButttonDisPlayStatus('none');
        }}
      >
        QRコードを読み取る
      </button>
    </>
  );
}
export default ReadQRCode;
