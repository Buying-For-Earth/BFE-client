import React from 'react';
import './Orderer.scss';

function Orderer() {
  return (
    <div className="orderer--container">
      <div className="orderer__header">주문자 정보</div>
      <div className="orderer__info">
        <div className="orderer__info__label">보내는 분</div>
        <input
          type="text"
          className="orderer__info__value"
          placeholder="이름을 입력해주세요"
        />
      </div>
      <div className="orderer__info">
        <div className="orderer__info__label">휴대폰</div>
        <input
          type="text"
          className="orderer__info__value"
          placeholder="'-'없이 입력해주세요"
        />
      </div>
      <div className="orderer__info">
        <div className="orderer__info__label">이메일</div>
        <input
          type="text"
          className="orderer__info__value"
          placeholder="이메일을 입력해주세요"
        />
      </div>
    </div>
  );
}

export default Orderer;
