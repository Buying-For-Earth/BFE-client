import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Destination.scss';

function Destination() {
  return (
    <div className="dst--container">
      <div className="dst__header">배송지</div>
      <div className="dst__input">
        <div className="dst__input__info">
          <Link to={'/order/address'}>
            <div className="dst__input__label">배송지를 입력해주세요</div>
            <IoIosArrowForward />
          </Link>
        </div>

        <hr />
        <div className="dst__input__info">
          <div className="dst__input__label">받으실 분 정보를 입력해주세요</div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default Destination;
