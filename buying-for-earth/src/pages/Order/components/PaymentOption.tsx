import React, { useState } from 'react';
import './PaymentOption.scss';
import { BsCreditCard } from 'react-icons/bs';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Price } from '../../../modules/price';

interface orderer {
  name: string;
  phone: string;
  email: string;
}

interface recipient {
  name: string;
  phone: string;
  request: string;
}

interface Props {
  price: Price;
  orderer: orderer;
  recipient: recipient;
  address: string;
}

function PaymentOption({ price, orderer, address, recipient }: Props) {
  const match = useRouteMatch();
  const [paymentButton, setPaymentBtn] = useState({
    active: '',
  });
  const history = useHistory();
  const handleClick = (e: any) => {
    let name = e.target.name ? e.target.name : e.target.className;
    setPaymentBtn({ active: name });
  };
  const handleFormCheck = (e: any) => {
    if (!orderer.name || !orderer.phone || !orderer.email) {
      alert('주문자 정보를 모두 입력해주세요');
    } else if (!address || !recipient.name) {
      alert('배송정보를 입력해주세요');
    } else {
      history.push(`${match.url}/complete`);
    }
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
        <div className="payment-btn" onClick={handleFormCheck}>
          {price.paymentPrice.toLocaleString()}원 결제하기
        </div>
      ) : (
        <div className="disabled">결제수단을 선택해주세요</div>
      )}
    </div>
  );
}

export default PaymentOption;
