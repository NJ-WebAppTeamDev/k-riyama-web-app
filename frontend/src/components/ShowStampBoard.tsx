'use client';
import { useEffect, useState } from 'react';
import { fetchStampBoardItems } from '@/utils/fetchMethods';
import style from './ShowStampBoard.module.scss';
import Image from 'next/image';

function ShowStampBoard({ stampsList }: { stampsList: string[] }) {
  const [stampBoardItems, setStampBoardItems] = useState<StampBoardItem[] | null>(
    null
  ); /* スタンプボードに表示するあだ名とそのid */
  const [loading, setLoading] = useState(true);
  const isUseAPI: boolean = true; /* APIを使用するか */
  /* 注意：APIサーバは通信料金がかかるため、現在停止中。APIを使わずにスタンプボードを表示する場合は、isUseAPIをfalseにしてください */

  useEffect(() => {
    /* APIからスタンプボードに表示する施設のあだ名とそのidを取得 */
    if (isUseAPI) {
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
        { id: 1, nick_name: 'キーワード1' },
        { id: 2, nick_name: 'キーワード2' },
        { id: 3, nick_name: 'キーワード3' },
        { id: 4, nick_name: 'キーワード4' },
        { id: 5, nick_name: 'キーワード5' },
        { id: 6, nick_name: 'キーワード6' },
        { id: 7, nick_name: 'キーワード7' },
        { id: 8, nick_name: 'キーワード8' },
        { id: 9, nick_name: 'キーワード9' },
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
                    src={'/mock/dummy_stampboard_img_' + stampBoardItem.id + '_100x100.jpg'}
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
                  {stampBoardItem.nick_name}
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
