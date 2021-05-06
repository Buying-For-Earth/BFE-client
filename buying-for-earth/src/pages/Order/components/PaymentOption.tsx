import React from 'react';
import './PaymentOption.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsCreditCard } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface Props {
  totalPrice?: number;
}
function PaymentOption({ totalPrice }: Props) {
  return (
    <div className="payment-option--container">
      <div className="payment-option__header">결제수단</div>
      <div className="payment-option">
        <div className="payment-option__card">
          <BsCreditCard />
          <div>신용카드</div>
        </div>
      </div>
      <div className="payment-option__selected">
        <div className="selected__option">
          카드를 선택해주세요
          <IoIosArrowDown />
        </div>
        <div className="selected__option disabled">
          할부 기간을 선택해주세요
          <IoIosArrowDown />
        </div>
      </div>
      <Link to="/order/complete">
        <div className="payment-btn">{totalPrice}원 결제하기</div>
      </Link>
    </div>
  );
}

export default PaymentOption;
