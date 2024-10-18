import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';

interface SlideShowProps {
  imagePaths: string[];
}

export default function SlideShow(props: SlideShowProps) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    waitForAnimate: false,
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Slider {...settings}>
        {props.imagePaths.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={300}
              height={200}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
