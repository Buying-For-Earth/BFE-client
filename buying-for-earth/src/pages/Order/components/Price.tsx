import React, { useEffect, useState } from 'react';
import './Price.scss';

interface Props {
  price?: number;
  totalPrice?: number;
}

function Price({ price, totalPrice }: Props) {
  return (
    <div className="price--container">
      <div className="price__header">결제금액</div>
      <div className="price">
        <div className="price__label">주문금액</div>
        <div className="price__value">{price} 원</div>
      </div>
      <div className="price price__small">
        <div className="price__label">└ 상품금액</div>
        <div className="price__value">{price} 원</div>
      </div>
      <div className="price price__small">
        <div className="price__label">└ 할인금액</div>
        <div className="price__value">0 원</div>
      </div>
      <div className="price">
        <div className="price__label">배송비</div>
        <div className="price__value">
          {price === totalPrice ? '0' : '+3000'} 원
        </div>
      </div>
      <div className="price price__total">
        <div className="price__label">최종결제금액</div>
        <div className="price__value">{totalPrice} 원</div>
      </div>
    </div>
  );
}

export default Price;
