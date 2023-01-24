import axios from 'axios';
import EnvironmentVariables from '../helpers/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  product: {},
  status: 'idle',
  error: null,
};

const API_URL = EnvironmentVariables.API_URL;

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API_URL}/api/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (build) => {
    build
      .addCase(getProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;

export const selectProduct = (state) => state.productSlice.product;
