"use client";
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

interface BlogsResponse {
  blogs: Blog[];
}

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/blogs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: BlogsResponse = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>ブログ一覧</h1>

      {blogs.length > 0 ? (
        blogs.map((blog) => (
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
        ))
      ) : (
        <p>ブログがありません。</p>
      )}
    </div>
  );
};

export default Home;
