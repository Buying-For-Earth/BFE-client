import React from 'react';
import './Search.scss';
import SearchProduct from './components/SearchProduct';
import SearchResult from './components/SearchResult';

function Search() {
  return (
  <div className="search">
    <SearchProduct />
    <SearchResult />
  </div>
  );
}

export default Search;
