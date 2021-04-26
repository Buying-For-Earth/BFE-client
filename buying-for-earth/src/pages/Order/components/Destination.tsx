import React from 'react';
import './Destination.scss';

function Destination() {
  return (
    <div className="dst--container">
      <div className="dst__header">배송지</div>
      <div className="dst__input">
        <div className="dst__input__addr">배송지를 입력해주세요</div>
        <div className="dst__input__info">받으실 분 정보를 입력해주세요</div>
      </div>
    </div>
  );
}

export default Destination;
