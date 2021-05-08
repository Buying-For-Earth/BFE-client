import React from 'react';
import SearchResultBox from './SearchResultBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';

interface Product {
  thumbnail: string;
  name: string;
  price: number;
  id: number;
}

function SearchResult() {
  const { search } = useSelector((state: RootState) => state);

  function emptyList() {
    if (search.products.length === 0) {
      return <div className="search-result__empty">검색 결과가 없습니다.</div>;
    }
  }
  return (
    <div className="search-result--container">
      <div className="search-result__total">
        총{' '}
        <span className="search-result__total__number">
          {search.products.length}
        </span>
        개
      </div>
      {emptyList()}
      <div className="search-result-list">
        <div className="search-result__product">
          {search.products.map((data: Product, index: number) => {
            return <SearchResultBox key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
