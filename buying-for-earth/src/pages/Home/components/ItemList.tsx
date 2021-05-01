import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.scss';

interface Item {
  id: number;
  itemName: string;
  price: number;
  image: string;
}

interface Props {
  items: Item[];
}

function ItemList({ items }: Props) {
  return (
    <div className="item-list--container">
      {items.map((item) => (
        <div key={item.id} className="item-list__item">
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="" className="itemlist__item__img" />
          </Link>
          <div className="item-list__item__name">{item.itemName}</div>
          <div className="item-list__item__price">
            {item.price.toLocaleString()}원
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
