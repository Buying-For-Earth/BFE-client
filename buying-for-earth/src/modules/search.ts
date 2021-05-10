import {createSlice} from '@reduxjs/toolkit';

interface Product {
    thumbnail: string;
    name: string;
    price: number;
    id: number;
  }

interface SearchState {
    products: Product[] | []
}

const initialState: SearchState = {
    products: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        saveList: (state, action) => {
            state.products = action.payload
        },
    }
})

export const {saveList} = searchSlice.actions

export default searchSlice.reducer