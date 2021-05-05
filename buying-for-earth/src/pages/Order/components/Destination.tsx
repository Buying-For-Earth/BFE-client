import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './Destination.scss';

interface info {
  name: string;
  phone: string;
  request: string;
}

interface Props {
  onAddressInput: (address: string) => void;
  address?: string | null;
}

function Destination({
  history,
  onAddressInput,
  address,
}: RouteComponentProps & Props) {
  return (
    <div className="dst--container">
      <div className="dst__header">배송지</div>
      <div className="dst__input">
        <div
          className="dst__input__info"
          onClick={() => {
            history.push('/order/address');
          }}
        >
          <div className="dst__input__label">
            {address ? address : '배송지를 입력해주세요'}
          </div>
          <IoIosArrowForward />
        </div>

        <hr />
        <div
          className="dst__input__info"
          onClick={() => {
            history.push('/order/info');
          }}
        >
          <div className="dst__input__label">받으실 분 정보를 입력해주세요</div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Destination);
