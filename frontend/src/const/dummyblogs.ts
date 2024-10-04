export const dummyBlogs: Blog[] = [
  {
    id: 1,
    nick_name: 'ニックネーム1',
    place_name: '施設1',
    points: ['ここがポイント1_1ここがポイント1_1', 'ここがポイント1_2'],
    more_description: '施設1の説明です'.repeat(10),
    address: '福島県郡山市田村町徳定中河原１',
    meta_description: '施設1のmetaタグのdescription',
    meta_og_description: '施設1のmetaタグのog_description',
    meta_keywords: '施設1のmetaタグのkeywords',
    images: ['/mock/dummy_blog_image_1.jpg'],
    student_voices: [
      {
        id: 1,
        academic_year: '学部1年',
        description: 'ここはこんなところがいいよ1'.repeat(3),
      },
    ],
  },
  {
    id: 2,
    nick_name: 'ニックネーム2',
    place_name: '施設2',
    points: ['ここがポイント2_1'],
    more_description: '施設1の説明です'.repeat(7),
    address: '福島県郡山市字燧田195',
    meta_description: '施設2のmetaタグのdescription',
    meta_og_description: '施設2のmetaタグのog_description',
    meta_keywords: '施設2のmetaタグのkeywords',
    images: ['/mock/dummy_blog_image_2.jpg', '/mock/dummy_blog_image_3.jpg'],
    student_voices: [
      {
        id: 2,
        academic_year: '学部2年',
        description: 'ここはこんなところがいいよ2_1'.repeat(2),
      },
      {
        id: 3,
        academic_year: '学部3年',
        description: 'ここはこんなところがいいよ2_2'.repeat(3),
      },
    ],
  },
  {
    id: 3,
    nick_name: 'ニックネーム3',
    place_name: '施設3',
    points: ['ここがポイント3_1', 'ここがポイント3_2ここがポイント3_2', 'ここがポイント3_3'],
    more_description: '施設3の説明です'.repeat(9),
    address: '福島県郡山市笹川三丁目267',
    meta_description: '施設3のmetaタグのdescription',
    meta_og_description: '施設3のmetaタグのog_description',
    meta_keywords: '施設3のmetaタグのkeywords',
    images: [
      '/mock/dummy_blog_image_1.jpg',
      '/mock/dummy_blog_image_2.jpg',
      '/mock/dummy_blog_image_3.jpg',
    ],
    student_voices: [
      {
        id: 4,
        academic_year: '学部4年',
        description: 'ここはこんなところがいいよ3_1'.repeat(2),
      },
      {
        id: 5,
        academic_year: '院1年',
        description: 'ここはこんなところがいいよ3_2'.repeat(3),
      },
    ],
  },
];
