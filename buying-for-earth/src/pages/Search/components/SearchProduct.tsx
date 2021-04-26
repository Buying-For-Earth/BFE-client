import React from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchProduct.scss";

function SearchProduct() {
  return (
    <div className="search-bar--container">
      <div className="search-bar">
        <FiSearch size="20" />
        <input type="search" placeholder="검색어를 입력해주세요" />
      </div>
    </div>
  );
}

export default SearchProduct;
