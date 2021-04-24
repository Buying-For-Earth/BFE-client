import React from 'react';
import "./SearchResultBox.scss"

function SearchResultBox() {
  return (
  <div className="search-result-box--container">
      <div className="search-result-box__image"></div>
      <div className="search-result-box__name">{"친환경 대나무 칫솔"}</div>
      <div className="search-result-box__discount-price">{"1,100"}원</div>
      <div className="search-result-box__price">{"1,300"}원</div>
  </div>
  );
}

export default SearchResultBox;
