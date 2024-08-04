"use client";
//型定義
type Blogs = {
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
};
//基本URL
const baseUrl = "http://localhost:5000";
//ブログ取得
export const fetchBlogs = async (): Promise<Blogs> => {
  const res = await fetch(baseUrl + "/api/v1/blogs");
  const blogs = await res.json();
  return blogs;
};
