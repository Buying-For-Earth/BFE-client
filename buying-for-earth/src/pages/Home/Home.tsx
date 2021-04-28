import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import './Home.scss';
import Header from '../../components/Header';
import ItemList from './components/ItemList';
import Recommend from './components/Recommend';
import ContentHeader from '../../components/ContentHeader';

function Home() {
  const images = [img1, img2, img3, img4];
  return (
    <>
      <Header />
      <ContentHeader title={'장바구니'} />
      <div className="home--container">
        <div className="home__recommend">
          <div className="home__recommend__title title">
            [MD추천] 이 상품 어때요?
          </div>
          <Recommend images={images} />
        </div>
        <div className="home__new">
          <div className="home__new__title title">[New] 새롭게 입점된 제품</div>
          <ItemList images={images} />
        </div>
        <div className="home__popular">
          <div className="home__popular__title title">
            [2030女] 많이 찾는 제품
          </div>
          <ItemList images={images} />
        </div>
      </div>
    </>
  );
}

export default Home;
