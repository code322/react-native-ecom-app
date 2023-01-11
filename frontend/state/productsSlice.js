import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../helpers/api';
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = axios.get(`${API_URL}/api/products`);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
