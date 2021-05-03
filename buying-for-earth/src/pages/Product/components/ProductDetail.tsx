import React from 'react';
import './ProductDetail.scss';

interface Props {
  item: { id: number; itemName: string; image: string; price: number };
}

function ProductDetail({ item }: Props) {
  return (
    <div className="product-detail--container">
      {/* <div className="product-detail__image"> */}
      <img className="product-detail__image" src={item.image} alt="" />
      {/* </div> */}
      <div className="product-detail__name">{item.itemName}</div>
      <div className="product-detail__discount-price">{item.price}원</div>
      {/* <div className="product-detail__price">{'1,300'}원</div> */}
      <div className="product-detail__image"></div>
      <div className="product-detail__image"></div>
      <div className="product-detail__image"></div>
    </div>
  );
}

export default ProductDetail;
