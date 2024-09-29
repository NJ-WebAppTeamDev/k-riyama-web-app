"use client";
import { useState } from "react";
import { useZxing } from "react-zxing";
import { useRouter } from "next/navigation";

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
  const [result, setResult] = useState("");
  const [cameraStatus, setCameraStatus] = useState(false); //true でカメラを止める
  const [isVisible, setIsVisible] = useState(true); //コンポーネント表示
  const { ref } = useZxing({
    paused: cameraStatus,
    onDecodeResult(result) {
      setResult(result.getText());
      console.log(result.getText());
      const blog_id_list: string[] = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
      ];
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
      alert("すでに読み込んだQRコードです");
      return;
    }
    const updatedStampsList = [...stampsList, newStamp];
    setStampsList(updatedStampsList);
    localStorage.setItem("stamps", JSON.stringify(updatedStampsList));
    alert("Add Stamp");
  };
  if (!isVisible) {
    return (
      <>
        <button onClick={reloadComponent}>続けてQRコードを読み取る</button>
      </>
    );
  }
  return (
    <>
      <video
        ref={ref}
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          border: "1px solid #ccc",
        }}
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
