import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResultBox.scss';

interface Product {
  thumbnail: string;
  name: string;
  price: number;
  id: number;
}

type SearchResultBoxProps = {
  data: Product;
};
// </Link>
function SearchResultBox({ data }: SearchResultBoxProps) {
  return (
    <Link className="search-result-box--container" to={`/product/${data.id}`}>
      <img src={data.thumbnail} alt="" className="search-result-box__image" />

      <div className="search-result-box__name">{data.name}</div>
      <div className="search-result-box__discount-price">
        {data.price * 0.8}원
      </div>
      <div className="search-result-box__price">{data.price}원</div>
    </Link>
  );
}

export default SearchResultBox;
