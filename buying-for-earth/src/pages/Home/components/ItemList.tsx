import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../modules/home';
import './ItemList.scss';

interface ItemListProps {
  list: Product[];
}

function ItemList({ list }: ItemListProps) {
  return (
    <div className="item-list--container">
      {list &&
        list.map((item: Product) => (
          <div key={item.id} className="item-list__item">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.thumbnail}
                alt=""
                className="itemlist__item__img"
              />
            </Link>
            <div className="item-list__item__name">{item.name}</div>
            <div className="item-list__item__price">
              {item.price.toLocaleString()}원
            </div>
          </div>
        ))}
    </div>
  );
}

export default ItemList;
