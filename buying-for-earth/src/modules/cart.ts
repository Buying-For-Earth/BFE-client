import { createSlice } from '@reduxjs/toolkit';

interface Options {
    name: string;
    option: string;
}

export type Item = {
  thumbnail: string;
  name: string;
  price: number;
  id: number;
  options: Options[] | [];
  amount: number;
  checked: boolean;
};

type CartState = Item[];

const initialState: CartState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action) => {
      return state.concat(action.payload);
    },
    increase: (state, action) => {
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item;
      });
    },
    decrease: (state, action) => {
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount > 1 ? item.amount - 1 : item.amount }
          : item;
      });
    },
    remove: (state, action) => {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
    toggle: (state, action) => {
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, checked: !item.checked }
          : item;
      });
    },
    clear: (state) => {
      return [];
    },
  },
});

export const {
  addItems,
  increase,
  decrease,
  remove,
  toggle,
  clear,
} = cartSlice.actions;
export default cartSlice.reducer;
