import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { addRecommand, addNew, addBath } from '../../modules/home';
import './Home.scss';
import ItemList from './components/ItemList';
import Recommend from './components/Recommend';

function Home() {
  const products = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    axios
      .get(
        'http://ec2-52-79-76-54.ap-northeast-2.compute.amazonaws.com:5000/home'
      )
      .then((res) => {
        for (let i = 0; i < 3; i++) {
          if (res.data.list[i].order_num === 1)
            dispatch(addRecommand(res.data.list[i].products));
          if (res.data.list[i].order_num === 2)
            dispatch(addNew(res.data.list[i].products));
          if (res.data.list[i].order_num === 3)
            dispatch(addBath(res.data.list[i].products));
        }
      });
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <div className="home--container">
        <div className="home__recommend">
          <div className="home__recommend__title title">
            [MD추천] 이 상품 어때요?
          </div>
          <Recommend list={products.recommand} />
        </div>
        <div className="home__new">
          <div className="home__new__title title">
            [New] 새롭게 입점된 친환경 빨대
          </div>
          <ItemList list={products.new} />
        </div>
        <div className="home__popular">
          <div className="home__popular__title title">
            [깨끗해질래요!] 욕실 제품
          </div>
          <ItemList list={products.bath} />
        </div>
      </div>
    </>
  );
}

export default Home;
