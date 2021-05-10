import React, { useState } from 'react';
import './PaymentOption.scss';
import { BsCreditCard } from 'react-icons/bs';
import { Link, useRouteMatch } from 'react-router-dom';

interface Props {
  totalPrice?: number;
}
function PaymentOption({ totalPrice }: Props) {
  const match = useRouteMatch();
  const [paymentButton, setPaymentBtn] = useState({
    active: '',
  });
  const handleClick = (e: any) => {
    let name = e.target.name ? e.target.name : e.target.className;
    setPaymentBtn({ active: name });
  };
  return (
    <div className="payment-option--container">
      <div className="payment-option__header">결제수단</div>
      <div className="payment-option__list">
        <button
          className={
            paymentButton.active === 'card'
              ? 'list__item active'
              : 'list__item card'
          }
          onClick={handleClick}
          name="card"
        >
          <BsCreditCard />
          <div className="card">신용카드</div>
        </button>
        <button
          className={
            paymentButton.active === 'naver'
              ? 'list__item active'
              : 'list__item naver'
          }
          name="naver"
          onClick={handleClick}
        >
          <img src="/images/naverPay.png" className="naver" alt="" />
        </button>
        <button
          className={
            paymentButton.active === 'toss'
              ? 'list__item active'
              : 'list__item toss'
          }
          name="toss"
          onClick={handleClick}
        >
          <img src="/images/toss.png" className="toss" alt="" />
        </button>
        <button
          className={
            paymentButton.active === 'payco'
              ? 'list__item active'
              : 'list__item payco'
          }
          name="payco"
          onClick={handleClick}
        >
          <img src="/images/payco.jpg" className="payco" alt="" />
        </button>
        <button
          className={
            paymentButton.active === 'chai'
              ? 'list__item active'
              : 'list__item chai'
          }
          name="chai"
          onClick={handleClick}
        >
          <img src="/images/chai.jpg" className="chai" alt="" />
        </button>
        <button
          className={
            paymentButton.active === 'account'
              ? 'list__item active'
              : 'list__item account'
          }
          name="account"
          onClick={handleClick}
        >
          계좌이체/무통장입금
        </button>
      </div>

      {paymentButton.active ? (
        <Link to={`${match.url}/complete`}>
          <div className="payment-btn">
            {totalPrice?.toLocaleString()}원 결제하기
          </div>
        </Link>
      ) : (
        <div className="disabled">결제수단을 선택해주세요</div>
      )}
    </div>
  );
}

export default PaymentOption;
