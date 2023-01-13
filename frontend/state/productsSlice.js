import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EnvironmentVariables from '../helpers/api';
import axios from 'axios';
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const API_URL = EnvironmentVariables.API_URL;

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API_URL}/api/products`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (build) => {
    build
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
