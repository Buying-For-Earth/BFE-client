import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Recommend.scss';
import { Link } from 'react-router-dom';

interface Item {
  image: string;
  id: number;
}

interface Props {
  items: Item[];
}

function Recommend({ items }: Props) {
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
          {items.map((item) => (
            <div key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt="" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Recommend;
