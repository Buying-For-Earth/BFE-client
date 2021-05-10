import React from 'react';
import './Empty.scss';

function Empty() {
  return (
    <div className="empty--container">
      <div className="empty__main">
        <div className="empty__message">
          장바구니에
          <br />
          담긴 상품이 없습니다.
        </div>
      </div>
    </div>
  );
}

export default Empty;
