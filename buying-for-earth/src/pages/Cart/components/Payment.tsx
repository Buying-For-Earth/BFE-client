import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Price } from './../../../modules/price';
import './Payment.scss';

type Props = {
  price: Price;
};

const Payment = ({ price }: Props) => {
  const match = useRouteMatch();

  return (
    <div className="payment--container">
      <div className="payment__price">
        <div className="payment__price__label">총 상품금액</div>
        <div className="payment__price__value">
          {price.productPrice.toLocaleString()} 원
        </div>
      </div>
      <div className="payment__price">
        <div className="payment__price__label">할인금액</div>
        <div className="payment__price__value">
          {(-price.discountPrice).toLocaleString()} 원
        </div>
      </div>
      <div className="payment__price">
        <div className="payment__price__label">배송비</div>
        <div className="payment__price__value">
          {price.productPrice - price.discountPrice > 30000
            ? '0 원'
            : '+3,000 원'}
        </div>
      </div>
      <div className="payment__notice">30,000원 이상 구매 시, 무료배송</div>
      <div className="payment__price total">
        <div className="payment__price__label">결제예정금액</div>
        <div className="payment__price__value">
          {price.paymentPrice.toLocaleString()} 원
        </div>
      </div>
      <Link to={`${match.url}/order`}>
        <div className="payment__btn">
          {price.paymentPrice.toLocaleString()}원 주문하기
        </div>
      </Link>
    </div>
  );
};

export default Payment;
