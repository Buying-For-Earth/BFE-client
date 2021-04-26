import React from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';
import './CartItem.scss';

function CartItem() {
  const items = [
    {
      name: '친환경 꿀벌 에코랩 1팩',
      price: 18000,
      amount: 1,
      options: ['세트 구성: A세트', '선물용 종이봉투: 선택안함'],
    },
  ];
  return (
    <div className="cart-item--container">
      <div className="cart-item__top">
        <div className="cart-item__top__checkbox">
          <AiOutlineCheckCircle />
        </div>
        <div className="cart-item__top__name">{items[0].name}</div>
        <div className="cart-item__top__remove">
          <AiOutlineClose />
        </div>
      </div>
      <div className="cart-item__info">
        <div className="cart-item__info__image"></div>
        <div className="cart-item__info__wrap">
          <div className="wrap__price">{items[0].price}원</div>
          <div className="wrap__amount">
            <button>-</button>
            <input type="text" value={items[0].amount} />
            <button>+</button>
          </div>
        </div>
      </div>
      <ul className="cart-item__info__options">
        {items[0].options.map((option) => (
          <li className="options__option">{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartItem;
