import React from 'react';
import './Search.scss';
import SearchProduct from '../../components/Search/SearchProduct';
import SearchResult from '../../components/Search/SearchResult';

function Search() {
  return (
  <div className="search">
    <SearchProduct />
    <SearchResult />
  </div>
  );
}

export default Search;
