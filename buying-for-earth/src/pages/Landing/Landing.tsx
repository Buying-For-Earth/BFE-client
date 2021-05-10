import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Landing.scss';

function Landing() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToshow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="landing--container">
      <Slider {...settings}>
        <div className="landing-section-0">
          <div>
            <p className="main-message">친환경 전문 이커머스</p>
            <p className="sub-message">Buying for Earth</p>
          </div>
        </div>

        <div className="landing-section-1">
          <p className="top-description">
            모든 친환경 제품이 <br />한 곳에 모였습니다!
          </p>
          <p className="bottom-description">
            친환경 제품, 어디서 사야할지 고민하셨죠? <br />
            <strong>바잉포어스에서 제품 탐색부터 구매까지 한 번에!</strong>
          </p>
        </div>

        <div className="landing-section-2">
          <p className="top-description">
            제품정보를 A부터 Z까지 <br />다 알려드립니다!
          </p>
          <p className="bottom-description">
            친환경 제품이 맞는지 의심하지 마세요. <br />
            <strong>재료부터 관리, 분리배출 방법까지 알려드립니다!</strong>
          </p>
        </div>

        <div className="landing-section-3">
          <div className="landing-section-3__image"></div>
          <p className="top-description">
            모든 사람의 삶을 <br />
            친환경적으로 바꾸는 그날까지
          </p>
          <p className="bottom-description">
            <strong>
              Next Generation을 위한 이커머스로 <br />더 멀리, 다 함께 사는 삶을
              꿈꿉니다.
            </strong>
          </p>
        </div>
      </Slider>
      <a href="http://buying-for-earth.s3-website.ap-northeast-2.amazonaws.com/">
        친환경 제품 구경하러 가기!
      </a>
    </div>
  );
}

export default Landing;
