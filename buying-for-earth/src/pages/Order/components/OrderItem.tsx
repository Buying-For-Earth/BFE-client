import React from 'react';
import './OrderItem.scss';

function OrderItem() {
  return (
    <div className="order-item--container">
      <div className="order-item__info">
        <div className="order-item__info__image"></div>
        <div className="order-item__info__wrap">
          <div className="wrap wrap__name">[NPE] 친환경 대나무 칫솔</div>
          <div className="wrap wrap__option">
            칫솔모 색상: 브라운 / 사이즈: 대
          </div>
          <div className="wrap wrap__price">
            <div className="price">5,500 원</div>
            <div className="amount">5개</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
