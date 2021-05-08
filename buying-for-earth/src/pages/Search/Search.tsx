import React, { useState } from 'react';
import './Search.scss';
import SearchProduct from './components/SearchProduct';
import SearchResult from './components/SearchResult';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { addInsert } from '../../modules/search';
import Product from '../Product';

interface Product {
  thumbnail: string;
  name: string;
  price: number;
  id: number;
}

function Search() {
  const [text, setText] = useState('');
  const [list, setList] = useState<Product[] | []>([]);
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addInsert(text)); // nightmare: 이전검색리스트 등 대비
    setText(text);
  };

  return (
    <div className="search">
      <SearchProduct onInsert={onInsert} setList={setList} />
      <SearchResult list={list} />
    </div>
  );
}

export default Search;
