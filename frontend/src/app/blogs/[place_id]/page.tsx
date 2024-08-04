"use client";
import style from "./page.module.scss";
import { fetchBlog, fetchBlogs } from "@/components/function/fetchMethods";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
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
    <div>
      {blog ? (
        <div key={blog.id}>
          <header>header</header>
          <h2>{blog.place_name}</h2>
          <Image
            src="/mock/430x214.png"
            alt=""
            layout="responsive"
            height={214}
            width={430}
          />
          <div className={style.place_point}>
            <h3>おすすめポイント</h3>
            <p>
              {blog.points.map((point, index) => {
                return <p key={index}>〇{point}</p>;
              })}
            </p>
          </div>
          <div className={style.place_description}>
            <h3>もっと詳しく</h3>
            <p>{blog.more_description}</p>
          </div>
          <div className={style.place_review}>
            <h3>学生の声</h3>
          </div>
          <div className={style.place_access}>
            <h3>アクセス</h3>
            <Image
              src="/mock/430x238.png"
              alt=""
              layout="responsive"
              height={238}
              width={430}
            />
            <p>{blog.address}</p>
          </div>
          <Footer />
        </div>
      ) : (
        <p>ブログがありません。</p>
      )}
    </div>
  );
}

export default Home;
