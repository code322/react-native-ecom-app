import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    productsSlice,
    productSlice,
    cartSlice,
  },
});

export default store;
