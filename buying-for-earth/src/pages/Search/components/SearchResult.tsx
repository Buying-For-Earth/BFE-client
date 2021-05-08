import React from 'react';
import SearchResultBox from './SearchResultBox';

interface Product {
  thumbnail: string;
  name: string;
  price: number;
  id: number;
}

type SearchResultProps = {
  //search: Search;
  list: [] | Product[];
};

function SearchResult({ list }: SearchResultProps) {
  function emptyList() {
    if (list.length === 0) {
      return <div className="search-result__empty">검색 결과가 없습니다.</div>;
    }
  }
  return (
    <div className="search-result--container">
      <div className="search-result__total">
        총 <span className="search-result__total__number">{list.length}</span>개
      </div>
      {emptyList()}
      <div className="search-result-list">
        <div className="search-result__product">
          {list.map((data: Product, index: number) => {
            return <SearchResultBox key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
