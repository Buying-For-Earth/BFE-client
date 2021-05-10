import React from 'react';
import { Item } from '../../../modules/cart';
import './OrderItem.scss';

interface Props {
  items: Item[];
}

function OrderItem({ items }: Props) {
  return (
    <div className="order-item--container">
      <div className="order-item__header">주문상품</div>
      {items.map((item) => (
        <div className="order-item__info" key={item.id}>
          <img
            className="order-item__info__image"
            src={item.thumbnail}
            alt=""
          />
          <div className="order-item__info__wrap">
            <div className="wrap wrap__name">{item.name}</div>
            <div className="wrap wrap__option">
              {item.options?.map((ele, index) => {
                return (
                  <div key={index}>
                    {ele.name} : {ele.option}
                  </div>
                );
              })}
            </div>
            <div className="wrap wrap__price">
              <div className="price">{item.price.toLocaleString()} 원</div>
              <div style={{ fontSize: '14px', color: '#070707' }}>|</div>
              <div className="amount">{item.amount}개</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderItem;
