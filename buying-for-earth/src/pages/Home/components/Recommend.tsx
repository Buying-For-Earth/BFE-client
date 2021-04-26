import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Recommend.scss';

type RecommendProps = {
  images: string[];
};

function Recommend({ images }: RecommendProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="recommend--container">
      <div className="recommend__item">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Recommend;
