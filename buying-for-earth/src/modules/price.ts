import { createSlice } from '@reduxjs/toolkit';
import { Item } from './cart';

export type Price = {
  productPrice: number;
  discountPrice: number;
  paymentPrice: number;
};

const initialState: Price = {
  productPrice: 0,
  discountPrice: 0,
  paymentPrice: 0,
};

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    getProductPrice: (state, action) => {
      let price = 0;
      action.payload.forEach((item: Item) => {
        price = item.checked ? price + item.price * item.amount : price;
      });
      return {
        ...state,
        productPrice: price,
      };
    },
    getDiscountPrice: (state, action) => {
      let price = 0;
      action.payload.forEach((item: Item) => {
        price = item.checked ? price + item.price * 0.2 * item.amount : price;
      });
      return {
        ...state,
        discountPrice: price,
      };
    },
    getPaymentPrice: (state, action) => {
      return {
        ...state,
        paymentPrice:
          action.payload > 30000 ? action.payload : action.payload + 3000,
      };
    },
  },
});

export const { getProductPrice, getDiscountPrice, getPaymentPrice } =
  priceSlice.actions;
export default priceSlice.reducer;
