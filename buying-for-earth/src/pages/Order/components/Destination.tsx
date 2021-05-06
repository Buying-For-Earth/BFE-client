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
  info?: info | null;
}

function Destination({
  history,
  onAddressInput,
  address,
  info,
}: RouteComponentProps & Props) {
  console.log(info);
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
          <div className={address ? 'dst__input__label' : 'empty'}>
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
          <div className={info ? 'dst__input__label' : 'empty'}>
            {info ? (
              <>
                <div>
                  {info.name}, {info.phone}
                </div>
                <div>{info.request}</div>
              </>
            ) : (
              '받으실 분 정보를 입력해주세요'
            )}
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Destination);
