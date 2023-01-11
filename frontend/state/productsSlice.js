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

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (build) => {
    build
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload;
      });
  },
});
