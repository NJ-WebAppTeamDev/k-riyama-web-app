'use client';

import style from './page.module.scss';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import PlaceReviewCards from '@/components/PlaceReviewCards';
import PlaceMap from '@/components/PlaceMap';
import HowAccessButton from '@/components/HowAccessButton';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { fetchBlog } from '@/utils/fetchMethods';
import { dummyBlogs } from '@/const/dummyblogs';
import BackTop from '@/components/BackTop';
import SlideShow from '@/components/blogs/SlideShow';
import { isUseAPIBlog } from '@/const/const';

const Inter_600 = Inter({ preload: false, weight: ['600'] });
const Inter_400 = Inter({ preload: false, weight: ['400'] });

function Home({ params }: { params: { place_id: string } }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.place_id && typeof params.place_id === 'string') {
      /* 注意：APIサーバは通信料金がかかるため、現在停止中。
        APIを使わずにブログを表示する場合は、
        frontendディレクトリ上で「cp .env.example .env」を実行し、
        .envファイルのNEXT_PUBLIC_IS_USE_API_BLOGを"True"から"False"にしてください */
      //ブログidをurlから取得し、指定IDのブログをフェッチ
      if (isUseAPIBlog) {
        fetchBlog(params.place_id)
          .then((data) => {
            setBlog(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Fetch error:', error);
            setLoading(false);
          });
      } else {
        /* APIを使わずにダミーデータを読み込む */
        const getBlogByID = (): Blog | null => {
          for (let b of dummyBlogs) {
            if (String(b.id) == params.place_id) {
              return b;
            }
          }
          return null;
        };
        setBlog(getBlogByID());
        setLoading(false);
      }
    }
  }, [params.place_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.place}>
      {blog ? (
        <div key={blog.id}>
          <Header />
          <h2 className={`${Inter_600.className} ${style.place_name}`}>{blog.place_name}</h2>
          <SlideShow imagePaths={blog.images} />

          <div className={style.place_inner}>
            <div className={style.place_point}>
              <h3 className={Inter_400.className}>おすすめポイント</h3>
              <div className={style.place_point__points}>
                {blog.points.map((point, index) => {
                  return <p key={index}>〇{point}</p>;
                })}
              </div>
            </div>
            <div className={style.place_description}>
              <h3 className={Inter_400.className}>もっと詳しく</h3>
              <p>{blog.more_description}</p>
            </div>

            <div className={style.place_review}>
              <h3 className={Inter_400.className}>学生の声</h3>
              <PlaceReviewCards studentVoiceList={blog.student_voices} />
            </div>

            <div className={style.place_access}>
              <h3 className={Inter_400.className}>アクセス</h3>
              <PlaceMap place_address={blog.address} />
              <p>{blog.address}</p>
              <HowAccessButton mapaddress={blog.address} />
            </div>
          </div>

          <BackTop />
          <Footer />
        </div>
      ) : (
        <p>ブログがありません。</p>
      )}
    </div>
  );
}

export default Home;
