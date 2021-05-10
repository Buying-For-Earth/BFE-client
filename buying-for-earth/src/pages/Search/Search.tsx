import React from 'react';
import './Search.scss';
import SearchProduct from './components/SearchProduct';
import SearchResult from './components/SearchResult';
import Header from '../../components/Header';

function Search() {
  return (
    <>
      <Header title="검색" />
      <div className="search">
        <SearchProduct />
        <SearchResult />
      </div>
    </>
  );
}

export default Search;
