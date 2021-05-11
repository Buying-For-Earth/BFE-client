import React from 'react';
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import { Item } from '../../../modules/cart';
import './CartItem.scss';

interface Props {
  item: Item;
  isCart?: boolean;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function CartItem({
  item,
  isCart,
  onIncrease,
  onDecrease,
  onToggle,
  onRemove,
}: Props) {
  let optionArray = Array.from(item.options!);
  return (
    <div className="cart-item--container">
      <div className="cart-item__top">
        {isCart && (
          <div
            className="cart-item__top__checkbox"
            onClick={() => onToggle(item.id)}
          >
            {item.checked ? (
              <AiFillCheckCircle color="#34CDAB" />
            ) : (
              <AiOutlineCheckCircle color="#aaa" />
            )}
          </div>
        )}
        <div className="cart-item__top__name">{item.name}</div>
        {isCart && (
          <div
            className="cart-item__top__remove"
            onClick={() => onRemove(item.id)}
          >
            <IoCloseOutline color="#aaa" />
          </div>
        )}
      </div>
      <div className="cart-item__info">
        <img className="cart-item__info__image" src={item.thumbnail} alt="" />
        <div className="cart-item__info__wrap">
          <div className="wrap__discount-price">
            <span className="discount-rate">20%</span>
            <span className="discount-price">
              {(item.price * 0.8).toLocaleString()}원
            </span>
          </div>
          <div className="wrap__price">{item.price.toLocaleString()}원</div>
          <div className="wrap__amount">
            <button
              className="decrease-btn"
              onClick={() => {
                if (item.amount === 1) {
                  return;
                }
                return onDecrease(item.id);
              }}
            >
              <AiOutlineMinus color="#bbb" />
            </button>
            <input type="text" value={item.amount} readOnly />
            <button
              className="increase-btn"
              onClick={() => onIncrease(item.id)}
            >
              <AiOutlinePlus color="#bbb" />
            </button>
          </div>
        </div>
      </div>
      <ul className="cart-item__info__options">
        {optionArray.map((ele, index) => {
          return (
            <li className="options__option" key={index}>
              {ele.name} : {ele.option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CartItem;
