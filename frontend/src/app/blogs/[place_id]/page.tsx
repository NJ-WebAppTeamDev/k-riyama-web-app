"use client";
import style from "./page.module.scss";
import { fetchBlog } from "@/components/function/fetchMethods";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Inter } from "next/font/google";
const Inter_600 = Inter({ preload: false, weight: ["600"] });
const Inter_400 = Inter({ preload: false, weight: ["400"] });
interface Blog {
  id: number;
  nick_name: string;
  place_name: string;
  points: string[];
  more_description: string;
  address: string;
  meta_description: string;
  meta_og_description: string;
  meta_keywords: string;
  images: string[];
  student_voices: string[];
}

function Home({ params }: { params: { place_id: string } }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //ブログidをurlから取得し、指定IDのブログをフェッチ
    if (params.place_id && typeof params.place_id === "string") {
      fetchBlog(params.place_id)
        .then((data) => {
          setBlog(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          setLoading(false);
        });
    }
  }, [params.place_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.place}>
      {blog ? (
        <div key={blog.id}>
          <header>header</header>
          <h2 className={`${Inter_600.className} ${style.place_name}`}>
            {blog.place_name}
          </h2>
          <Image
            src="/mock/430x214.png"
            alt=""
            layout="responsive"
            height={214}
            width={430}
          />
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
              <div className={style.place_review__card}>
                <div className={style.place_review__studentinfo}>
                  <Image
                    src="/images/student_icon.png"
                    alt=""
                    width={69}
                    height={69}
                  />
                  <h4>XXXX学科　学部1年</h4>
                </div>
                <p>
                  学生から見た施設のおすすめポイント学生から見た施設のおすすめポイント学生から見た施設のおすすめポイント
                </p>
              </div>
            </div>
            <div className={style.place_access}>
              <h3 className={Inter_400.className}>アクセス</h3>
              <Image
                src="/mock/430x238.png"
                alt=""
                layout="responsive"
                height={238}
                width={430}
              />
              <p>{blog.address}</p>
              <div className={style.place_access__btnwrapper}>
                <button>アクセス方法を表示</button>
              </div>
            </div>
          </div>
          <div>最初の画面に戻るコンポーネント</div>
          <Footer />
        </div>
      ) : (
        <p>ブログがありません。</p>
      )}
    </div>
  );
}

export default Home;
