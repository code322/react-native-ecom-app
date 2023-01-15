import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = configureStore({
  reducer: {
    productsSlice,
    productSlice,
    cartSlice,
  },
});

export default store;
