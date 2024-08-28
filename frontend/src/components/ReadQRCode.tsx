'use client';
import { useEffect, useState } from 'react';
import { useZxing } from 'react-zxing';

function ReadQRCode() {
  const [result, setResult] = useState('');
  const [stampsList, setStampsList] = useState<string[]>([]);
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      console.log(result.getText());
      if (
        result.getText() === 'https://x.com/home?lang=ja' ||
        result.getText() === 'https://www.instagram.com/' ||
        result.getText() === 'https://www.youtube.com/'
      ) {
        addStamp(result.getText());
      }
    },
  });
  /*ローカルストレージに保存されているスタンプを読み込み*/
  useEffect(() => {
    const storedStamps = localStorage.getItem('stamps');
    if (storedStamps) {
      setStampsList(JSON.parse(storedStamps));
    }
  }, []);
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
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
}
export default ReadQRCode;
