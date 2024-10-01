//基本URL
const baseUrl = 'http://54.250.186.18';

// 全ブログ取得
export const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(baseUrl + '/api/v1/blogs');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

//指定のIDのブログを取得
export const fetchBlog = async (blogID: string): Promise<Blog> => {
  const res = await fetch(baseUrl + '/api/v1/blogs/' + blogID);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

// ホーム画面のスタンプボードの内容を取得
export const fetchStampBoardItems = async (): Promise<StampBoardItem[][]> => {
  const res = await fetch(baseUrl + '/api/v1/stampboard');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};
