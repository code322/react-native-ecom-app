import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productsSlice from './productsSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  productsSlice,
  productSlice,
  cartSlice,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
