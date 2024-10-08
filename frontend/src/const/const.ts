export const isUseAPIBlog: Boolean =
  process.env.NEXT_PUBLIC_IS_USE_API_BLOG != undefined &&
  process.env.NEXT_PUBLIC_IS_USE_API_BLOG.toLowerCase() == 'true';

export const isUseAPIStamp: Boolean =
  process.env.NEXT_PUBLIC_IS_USE_API_STAMP != undefined &&
  process.env.NEXT_PUBLIC_IS_USE_API_STAMP.toLowerCase() == 'true';
