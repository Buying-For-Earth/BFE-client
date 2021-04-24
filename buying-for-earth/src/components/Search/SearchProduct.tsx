import React from 'react';
import { FiSearch } from 'react-icons/fi'
import './SearchProduct.scss';

function SearchProduct() {
  return (
    <div className="searchbar--container">
      <div className="searchbar">
        <FiSearch size="20" />
        <input type="search" placeholder="검색어를 입력해주세요" />
        <div className="searchbar__hr"></div>
      </div>
    </div>
  );
}

export default SearchProduct;
