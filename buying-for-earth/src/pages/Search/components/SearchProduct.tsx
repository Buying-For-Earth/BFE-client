import axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import './SearchProduct.scss';

interface Product {
  thumbnail: string;
  name: string;
  price: number;
  id: number;
}

type SearchProductProps = {
  onInsert: (text: string) => void;
  setList: Dispatch<SetStateAction<Product[] | []>>;
};

function SearchProduct({ onInsert, setList }: SearchProductProps) {
  const [value, setValue] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function onDelete(e: React.MouseEvent<HTMLButtonElement>) {
    setValue('');
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value === '') {
      alert('검색어를 입력해주세요');
      return;
    }
    axios
      .get(
        `http://ec2-52-79-76-54.ap-northeast-2.compute.amazonaws.com:5000/search`,
        {
          params: {
            search_keyword: value,
          },
        }
      )
      .then((response) => {
        setList(response.data.results);
      });
    onInsert(value);
  }

  return (
    <div className="search-bar--container">
      <div className="search-bar">
        <form onSubmit={onSubmit}>
          <FiSearch size="20" color="#31ceac" />
          <input
            type="search"
            value={value}
            placeholder="검색어를 입력해주세요"
            onChange={onChange}
          />
        </form>
        {value !== '' ? (
          <button className="search-bar__deleteBtn" onClick={onDelete}>
            <IoClose size="20" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default SearchProduct;
