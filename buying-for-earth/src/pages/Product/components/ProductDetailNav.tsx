import React from 'react';
import {Link} from 'react-router-dom';
import './ProductDetailNav.scss';

function ProductDetailNav() {
  return (
  <div className="product-detail-nav--container">
      <Link to="/product">상품 설명</Link>
      <Link to="/product/review">구매 후기</Link>
  </div>
  );
}

export default ProductDetailNav;
