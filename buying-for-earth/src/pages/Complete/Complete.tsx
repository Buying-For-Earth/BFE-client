import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import './Complete.scss';

interface Props {
  totalPrice?: number;
}
function Complete({ totalPrice }: Props) {
  return (
    <>
      <div className="complete-header">주문완료</div>
      <div className="complete--container">
        <div className="complete__confirm">
          <div className="confirm__icon">
            <AiFillCheckCircle />
          </div>
          <div className="confirm__img"></div>
          <div className="confirm__msg">
            홍길동 님의 주문이 완료되었습니다.
            <br />
            환경을 생각하는 소비에 감사드립니다!
          </div>
          <div className="confirm__price">
            <div className="confirm__price__label">결제금액</div>
            <div className="confirm__price__value">{totalPrice} 원</div>
          </div>
          <div className="confirm__detail">주문내역 상세보기</div>
        </div>
        <div className="wrap">
          <div className="home-btn">홈으로 이동</div>
        </div>
      </div>
    </>
  );
}

export default Complete;
