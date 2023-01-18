import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productsSlice from './productsSlice';
import productSlice from './productSlice';
import favouriteSlice from './FavouriteSlice';
import cartSlice from './cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import authSlice from './authSlice';

const reducers = combineReducers({
  productsSlice,
  productSlice,
  cartSlice,
  favouriteSlice,
  authSlice,
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
