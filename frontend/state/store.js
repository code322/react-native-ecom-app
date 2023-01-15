import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import productSlice from './productSlice';

const store = configureStore({
  reducer: {
    productsSlice,
    productSlice,
  },
});

export default store;
