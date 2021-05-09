import { createSlice } from '@reduxjs/toolkit';

export type Product = {
  thumbnail: string;
  name: string;
  price: number;
  id: number;
};

export interface HomeState {
  recommand: Product[];
  new: Product[];
  bath: Product[];
}

const initialState: HomeState = {
  recommand: [],
  new: [],
  bath: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addRecommand: (state, action) => {
      return { ...state, recommand: action.payload };
    },
    addNew: (state, action) => {
      return { ...state, new: action.payload };
    },
    addBath: (state, action) => {
      return { ...state, bath: action.payload };
    },
  },
});

export const { addRecommand, addNew, addBath } = homeSlice.actions;
export default homeSlice.reducer;
