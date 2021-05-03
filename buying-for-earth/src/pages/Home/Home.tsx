import React from 'react';
import './Home.scss';
import Header from '../../components/Header';
import ItemList from './components/ItemList';
import Recommend from './components/Recommend';
import { fakeData } from '../../fakeData';

function Home() {
  return (
    <>
      <Header />
      <div className="home--container">
        <div className="home__recommend">
          <div className="home__recommend__title title">
            [MD추천] 이 상품 어때요?
          </div>
          <Recommend items={fakeData} />
        </div>
        <div className="home__new">
          <div className="home__new__title title">[New] 새롭게 입점된 제품</div>
          <ItemList items={fakeData} />
        </div>
        <div className="home__popular">
          <div className="home__popular__title title">
            [2030女] 많이 찾는 제품
          </div>
          <ItemList items={fakeData} />
        </div>
      </div>
    </>
  );
}

export default Home;
