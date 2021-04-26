import React from 'react';
import './ProductDetail.scss';

function ProductDetail() {
  return (
  <div className="product-detail--container">
      <div className="product-detail__image"></div>
      <div className="product-detail__name">친환경대나무칫솔</div>
      <div className="product-detail__discount-price">{"1,100"}원</div>
      <div className="product-detail__price">{"1,300"}원</div>
  </div>
  );
}

export default ProductDetail;
