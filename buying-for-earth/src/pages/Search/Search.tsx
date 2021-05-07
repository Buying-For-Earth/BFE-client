import React, { useState } from 'react';
import './Search.scss';
import SearchProduct from './components/SearchProduct';
import SearchResult from './components/SearchResult';

function Search() {
  const onSubmit = (value: string) => {
    console.log(value);
  };
  return (
    <div className="search">
      <SearchProduct onSubmit={onSubmit} />
      <SearchResult />
    </div>
  );
}

export default Search;
