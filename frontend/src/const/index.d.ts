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
  student_voices: StudentVoice[];
}

interface StampBoardItem {
  id: number;
  nick_name: string;
}

interface StudentVoice {
  id: number;
  academic_year: string;
  description: string;
}
