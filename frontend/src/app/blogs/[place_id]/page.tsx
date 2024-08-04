"use client";
import { fetchBlog, fetchBlogs } from "@/components/function/fetchMethods";
import { useEffect, useState } from "react";

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
      <h1>ブログ一覧</h1>

      {blog ? (
        <div
          key={blog.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h2>{blog.nick_name}</h2>
          <h3>{blog.place_name}</h3>
          <p>{blog.more_description}</p>
          <p>
            <strong>住所:</strong> {blog.address}
          </p>
          <p>
            <strong>ポイント:</strong>
          </p>
          <ul>
            {blog.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p>
            <strong>メタディスクリプション:</strong> {blog.meta_description}
          </p>
          <p>
            <strong>キーワード:</strong> {blog.meta_keywords}
          </p>
        </div>
      ) : (
        <p>ブログがありません。</p>
      )}
    </div>
  );
}

export default Home;
