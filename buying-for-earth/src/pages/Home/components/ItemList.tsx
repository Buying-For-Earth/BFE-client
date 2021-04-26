import React from 'react';
import './ItemList.scss';

type ItemListProps = {
  images: string[];
};

function ItemList({ images }: ItemListProps) {
  return (
    <div className="item-list--container">
      {images.map((img, i) => (
        <div key={i} className="item-list__item">
          <img src={img} alt="" className="itemlist__item__img" />
          <div className="item-list__item__name">이름</div>
          <div className="item-list__item__price">가격</div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
