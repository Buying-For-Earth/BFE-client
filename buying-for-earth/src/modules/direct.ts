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

type DirectState = Item;

const initialState: DirectState = {} as Item;

const directSlice = createSlice({
  name: 'direct',
  initialState,
  reducers: {
    addItem: (state, action) => {
      return action.payload;
    },
    directIncrease: (state) => {
      return { ...state, amount: state.amount + 1 };
    },
    directDecrease: (state) => {
      return { ...state, amount: state.amount - 1 };
    },
    clearItem: (state) => {
      return {} as Item;
    },
  },
});

export const { addItem, directIncrease, directDecrease, clearItem } =
  directSlice.actions;
export default directSlice.reducer;
