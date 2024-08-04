"use client";
//型定義
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
//基本URL
const baseUrl = "http://localhost:5000";
// 全ブログ取得
export const fetchBlogs = async (): Promise<BlogsResponse> => {
  const res = await fetch(baseUrl + "/api/v1/blogs");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data: BlogsResponse = await res.json();
  return data;
};
//指定のIDのブログを取得
export const fetchBlog = async (blogID: string): Promise<Blog> => {
  const res = await fetch(baseUrl + "/api/v1/blogs/" + blogID);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Blog = await res.json();
  return data;
};
