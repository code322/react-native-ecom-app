import axios from 'axios';
import EnvironmentVariables from '../helpers/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  product: {},
  isLoading: false,
  error: null,
};

const API_URL = EnvironmentVariables.API_URL;

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API_URL}/api/product`);
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
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
