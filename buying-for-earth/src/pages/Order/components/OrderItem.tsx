import React from 'react';
import './OrderItem.scss';

interface item {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  amount: number;
  checked: boolean;
}

interface Props {
  items: item[];
}

function OrderItem({ items }: Props) {
  return (
    <div className="order-item--container">
      <div className="order-item__header">주문상품</div>
      {items.map((item) => (
        <div className="order-item__info">
          <img
            className="order-item__info__image"
            src={item.thumbnail}
            alt=""
          />
          <div className="order-item__info__wrap">
            <div className="wrap wrap__name">{item.name}</div>
            {/* <div className="wrap wrap__option">
              칫솔모 색상: 브라운 / 사이즈: 대
            </div> */}
            <div className="wrap wrap__price">
              <div className="price">{item.price} 원</div>
              <div className="amount">{item.amount}개</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderItem;
