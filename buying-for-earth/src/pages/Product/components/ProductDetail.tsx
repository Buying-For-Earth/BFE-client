import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { fakeData } from '../../../fakeData';
import './ProductDetail.scss';

interface MatchParams {
  id: string;
}

function ProductDetail({ match }: RouteComponentProps<MatchParams>) {
  const [item, setItem] = useState({ image: '', name: '', price: 0 });

  useEffect(() => {
    for (let item of fakeData) {
      if (item.id === Number(match.params.id)) {
        setItem({ image: item.image, name: item.itemName, price: item.price });
        break;
      }
    }
  }, []);

  return (
    <div className="product-detail--container">
      {/* <div className="product-detail__image"> */}
      <img className="product-detail__image" src={item.image} alt="" />
      {/* </div> */}
      <div className="product-detail__name">{item.name}</div>
      <div className="product-detail__discount-price">{item.price}원</div>
      {/* <div className="product-detail__price">{'1,300'}원</div> */}
      <div className="product-detail__image"></div>
      <div className="product-detail__image"></div>
      <div className="product-detail__image"></div>
    </div>
  );
}

export default withRouter(ProductDetail);
