import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import './Home.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../../components/Header'

function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  const images = [img1, img2, img3, img4];
  return (
    <>
      <Header />
      <div className='container'>
        <div className='recommend'>
          <div className='title'>[MD추천] 이 상품 어때요?</div>
          <div className='recommend-prod'>
            <Slider {...settings}>
              {images.map((img, i) => (
                <div key={i}>
                  <img src={img} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='new'>
          <div className='title'>[New] 새롭게 입점된 제품</div>
          <div className='new-prod'>
            {images.map((img, i) => (
              <div key={i}>
                <img src={img} alt="" />
                <div className="item-name">이름</div>
                <div className="item-price">가격</div>
              </div>
            ))}
          </div>
        </div>
        <div className="popular">
          <div className='title'>[2030女] 많이 찾는 제품</div>
          <div className='pop-prod'>
            {images.map((img, i) => (
              <div key={i}>
                <img src={img} alt="" />
                <div className="item-name">이름</div>
                <div className="item-price">가격</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
