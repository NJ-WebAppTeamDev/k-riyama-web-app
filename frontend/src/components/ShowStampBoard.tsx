'use client';
import { useEffect, useState } from 'react';
import { fetchStampBoardItems } from '@/utils/fetchMethods';
import style from './ShowStampBoard.module.scss';
import Image from 'next/image';
import { isUseAPIStamp } from '@/const/const';

function ShowStampBoard({ stampsList }: { stampsList: string[] }) {
  const [stampBoardItems, setStampBoardItems] = useState<StampBoardItem[] | null>(
    null
  ); /* スタンプボードに表示するあだ名とそのid */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* 注意：APIサーバは通信料金がかかるため、現在停止中。
      APIを使わずにスタンプボードを表示する場合は、
      frontendディレクトリ上で「cp .env.example .env」を実行し、
      .envファイルのNEXT_PUBLIC_IS_USE_API_STAMPを"True"から"False"にしてください */

    /* APIからスタンプボードに表示する施設のあだ名とそのidを取得 */
    if (isUseAPIStamp) {
      fetchStampBoardItems()
        .then((data) => {
          setStampBoardItems(Object.values(data)[0]);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          setLoading(false);
        });
    } else {
      /* APIを使わずにダミーデータを読み込む */
      const dummyStampBoardItems: StampBoardItem[] = [
        {
          id: 1,
          nick_name: '私たちの学び舎',
        },
        {
          id: 2,
          nick_name: '新幹線と星空',
        },
        {
          id: 3,
          nick_name: '日大の最寄り駅',
        },
        {
          id: 4,
          nick_name: '奥座敷',
        },
        {
          id: 5,
          nick_name: '街の歴史語る滝桜',
        },
        {
          id: 6,
          nick_name: '新装・憩いの場',
        },
        {
          id: 7,
          nick_name: '夢の国',
        },
        {
          id: 8,
          nick_name: 'ワクワク集う場所',
        },
        {
          id: 9,
          nick_name: '芸術と夜景',
        },
      ];
      setStampBoardItems(dummyStampBoardItems);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {stampBoardItems ? (
        <div className={style.stampboard}>
          {stampBoardItems.map((stampBoardItem) => {
            /* あだ名のidがローカルストレージにある場合は、画像を表示 */
            if (stampsList.includes(String(stampBoardItem.id))) {
              return (
                <div className={style.stampboard_panel} key={String(stampBoardItem.id)}>
                  <Image
                    src={'/images/stampboard_img_' + stampBoardItem.id + '.jpg'}
                    alt=""
                    layout="responsive"
                    height={100}
                    width={100}
                    priority={true}
                  />
                </div>
              );
            } else {
              /* あだ名のidがローカルストレージにない場合は、あだ名を表示 */
              return (
                <div className={style.stampboard_panel} key={String(stampBoardItem.id)}>
                  <p>{stampBoardItem.nick_name}</p>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <p>サーバとの通信に失敗しました．</p>
      )}
    </>
  );
}
export default ShowStampBoard;
