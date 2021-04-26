import React from 'react';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment--container">
      <div className="payment__price">
        <div className="payment__price__label">총 상품금액</div>
        <div className="payment__price__value">19,100 원</div>
      </div>
      <div className="payment__price">
        <div className="payment__price__label">할인금액</div>
        <div className="payment__price__value">0 원</div>
      </div>
      <div className="payment__price">
        <div className="payment__price__label">배송비</div>
        <div className="payment__price__value">+3,000 원</div>
      </div>
      <div className="payment__notice">30,000원 이상 구매 시, 무료배송</div>
      <div className="payment__price total">
        <div className="payment__price__label">결제예정금액</div>
        <div className="payment__price__value">22,100 원</div>
      </div>
      <div className="payment__btn">22,100원 주문하기</div>
    </div>
  );
};

export default Payment;
