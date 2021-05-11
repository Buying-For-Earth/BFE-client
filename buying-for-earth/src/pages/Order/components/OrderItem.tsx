import React from 'react';
import { Item } from '../../../modules/cart';
import './OrderItem.scss';

interface Props {
  items: Item[];
}
interface Options {
  name: string;
  option: string;
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
            <div className="wrap__name">{item.name}</div>
            <div className="wrap__info">
              <div className="wrap__option">
                {item.options.map((ele: Options, index: number) => {
                  return (
                    <div key={index}>
                      {ele.name} : {ele.option}
                    </div>
                  );
                })}
                <div>수량: {item.amount}개</div>
              </div>
              <div className="wrap__price">
                <div>
                  <span className="discount-rate">20%</span>
                  <span className="discount-price">
                    {(item.price * 0.8).toLocaleString()} 원
                  </span>
                </div>

                <div className="price">{item.price.toLocaleString()} 원</div>

                {/* <div style={{ fontSize: '14px', color: '#070707' }}>|</div> */}
                {/* <div className="amount"></div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderItem;
