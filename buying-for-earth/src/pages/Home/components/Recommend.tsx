import React, { useState } from 'react';
import Slider from 'react-slick';
import { Product } from '../../../modules/home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Recommend.scss';
import { Link } from 'react-router-dom';

interface RecommendProps {
  list: [] | Product[];
}

function Recommend({ list }: RecommendProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  return (
    <div className="recommend--container">
      <div className="recommend__item">
        <Slider {...settings}>
          {list &&
            list.map((item: Product) => (
              <div key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img src={item.thumbnail} alt="" />
                </Link>
              </div>
            ))}
        </Slider>
        <div className="page">{`${currentSlide + 1} / ${list.length}`}</div>
      </div>
    </div>
  );
}

export default Recommend;
