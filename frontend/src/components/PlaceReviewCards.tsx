'use client';
import Image from 'next/image';
import style from './PlaceReviewCards.module.scss'; /*cssを使用しデザインを変えたい場合は、←のファイルを編集すること */

/* studentVoiceList(StudentVoice型の配列)として、学生の声に表示する内容を受け取る */
function PlaceReviewCards({ studentVoiceList }: { studentVoiceList: StudentVoice[] }) {
  // studentVoiceの中身を参照する(不要であれば削除可)
  /*
  console.log('studentVoiceList:', studentVoiceList);
  console.log('studentVoiceList[0]', studentVoiceList[0]);
  console.log('studentVoiceList[0].id', studentVoiceList[0].id);
  console.log('studentVoiceList[0].academic_year', studentVoiceList[0].academic_year);
  console.log('studentVoiceList[0].description', studentVoiceList[0].description);
  */

  /* 以下をstudentVoiceListの値に応じて、内容を変化させるように書き換える */
  return (
    <div className={style.place_review__cards}>
      <div className={style.place_review__card}>
        <div className={style.place_review__studentinfo}>
          <Image src="/images/student_icon.png" alt="" width={69} height={69} />
          <h4>学部1年</h4>
        </div>
        <p>
          学生から見た施設のおすすめポイント学生から見た施設のおすすめポイント学生から見た施設のおすすめポイント
        </p>
      </div>

      <div className={style.place_review__card}>
        <div className={style.place_review__studentinfo}>
          <Image src="/images/student_icon.png" alt="" width={69} height={69} />
          <h4>学部1年</h4>
        </div>
        <p>
          学生から見た施設のおすすめポイント学生から見た施設のおすすめポイント学生から見た施設のおすすめポイント
        </p>
      </div>
      {/* 参考： <p>{studentVoiceList[0].description}</p> のよう{}を使うことで、タグ内で変数が参照できる*/}
    </div>
  );
}

export default PlaceReviewCards;
