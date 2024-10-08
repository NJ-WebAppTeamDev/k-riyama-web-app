'use client';
import style from './PlaceMap.module.scss';

function PlaceMap({ place_address }: { place_address: string }) {
  return (
    <div className={style.place_map}>
      <iframe
        title="GoogleMap of places introduced in the blog"
        src={'https://maps.google.co.jp/maps?output=embed&q=' + place_address + '&hl=ja'}
      ></iframe>
    </div>
  );
}

export default PlaceMap;
