import React from 'react';
import './Method.scss';

function Method() {
  return (
    <div className="method--container">
      <div className="method__header">결제수단</div>
      <div className="method">신용카드</div>
      <div className="method__card">
        <div className="method__card__select"></div>
        <div className="method__card__period"></div>
        <div className="payment-btn">8,500원 결제하기</div>
      </div>
    </div>
  );
}

export default Method;
