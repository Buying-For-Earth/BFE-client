import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './SearchProduct.scss';

type SearchFormProps = {
  onSubmit: (value: string) => void;
};

function SearchProduct({ onSubmit }: SearchFormProps) {
  const [search_inputText, setSearch_inputText] = useState('');

  const value: string = search_inputText;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearch_inputText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(search_inputText);
  }

  return (
    <div className="search-bar--container">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <FiSearch size="20" />
          <input
            type="search"
            value={value}
            placeholder="검색어를 입력해주세요"
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchProduct;
