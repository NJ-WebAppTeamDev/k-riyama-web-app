'use client';
import Image from 'next/image';
import style from './PlaceReviewCards.module.scss';

function PlaceReviewCards({ studentVoiceList }: { studentVoiceList: StudentVoice[] }) {
  
  //console.log('studentVoiceList:', studentVoiceList);

  return (
    <div className={style.place_review__cards}>
      {studentVoiceList.map((voice, index) => (
        <div key={index} className={style.place_review__card}>
          <div className={style.place_review__studentinfo}>
            <Image src="/images/student_icon.png" alt="Student Icon" width={69} height={69} />
            <h4>{voice.academic_year}</h4>
          </div>
          <p>{voice.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PlaceReviewCards;
