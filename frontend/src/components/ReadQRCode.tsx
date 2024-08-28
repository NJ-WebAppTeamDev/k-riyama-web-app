'use client';
import { useState } from 'react';
import { useZxing } from 'react-zxing';

function ReadQRCode({
  stampsList,
  setStampsList,
}: {
  stampsList: string[];
  setStampsList: (arg0: string[]) => void;
}) {
  const [result, setResult] = useState('');
  const [cameraStatus, setCameraStatus] = useState(false); //true でカメラを止める
  const { ref } = useZxing({
    paused: cameraStatus,
    onDecodeResult(result) {
      setResult(result.getText());
      console.log(result.getText());
      if (
        result.getText() === 'https://x.com/home?lang=ja' ||
        result.getText() === 'https://www.instagram.com/' ||
        result.getText() === 'https://www.youtube.com/'
      ) {
        addStamp(result.getText());
        setCameraStatus(true); //スタンプ保存後カメラをリセットさせる
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
        ref={ref}
        style={{ width: '100%', maxWidth: '500px', height: 'auto', border: '1px solid #ccc' }}
        playsInline
      />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
}
export default ReadQRCode;
