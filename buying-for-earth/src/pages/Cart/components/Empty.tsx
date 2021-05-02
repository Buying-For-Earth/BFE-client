import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import './Empty.scss';

function Empty() {
  return (
    <div className="empty--container">
      <div className="empty__main">
        <FaShoppingBag />
        <div className="empty__message">
          장바구니에
          <br />
          담긴 상품이 없습니다.
        </div>
      </div>
      <div className="empty__btn">상품을 담아주세요</div>
    </div>
  );
}

export default Empty;
