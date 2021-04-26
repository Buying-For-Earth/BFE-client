import React from "react";
import SearchResultBox from "./SearchResultBox";

function SearchResult() {
  return (
    <div className="search-result--container">
      <div className="search-result__total">
        총 <span className="search-result__total__number">{15}</span>개
      </div>
      <div className="search-result__product">
        <SearchResultBox />
        <SearchResultBox />
        <SearchResultBox />
        <SearchResultBox />
        <SearchResultBox />
        <SearchResultBox />
        <SearchResultBox />
        <SearchResultBox />
      </div>
    </div>
  );
}

export default SearchResult;
