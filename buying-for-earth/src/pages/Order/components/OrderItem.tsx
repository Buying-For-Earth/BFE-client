import React from 'react';
import ItemList from '../../Home/components/ItemList';
import './OrderItem.scss';

interface item {
  id: number;
  itemName: string;
  image: string;
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
          <img className="order-item__info__image" src={item.image} alt="" />
          <div className="order-item__info__wrap">
            <div className="wrap wrap__name">{item.itemName}</div>
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
