import React from 'react';
import { Price as PriceType } from '../../../modules/price';
import './Price.scss';

type Props = {
  price: PriceType;
};
function Price({ price }: Props) {
  return (
    <div className="price--container">
      <div className="price__header">결제금액</div>
      <div className="price">
        <div className="price__label">주문금액</div>
        <div className="price__value">
          {price.productPrice.toLocaleString()} 원
        </div>
      </div>
      <div className="price price__small">
        <div className="price__label">└ 상품금액</div>
        <div className="price__value">
          {price.productPrice.toLocaleString()} 원
        </div>
      </div>
      <div className="price price__small">
        <div className="price__label">└ 할인금액</div>
        <div className="price__value">
          {(-price.discountPrice).toLocaleString()} 원
        </div>
      </div>
      <div className="price">
        <div className="price__label">배송비</div>
        <div className="price__value">
          {price.productPrice - price.discountPrice >= 30000 ? '0' : '+3,000'}{' '}
          원
        </div>
      </div>
      <div className="price price__total">
        <div className="price__label">최종결제금액</div>
        <div className="price__value">
          {price.paymentPrice.toLocaleString()} 원
        </div>
      </div>
    </div>
  );
}

export default Price;
