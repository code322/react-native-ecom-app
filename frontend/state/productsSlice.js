import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import EnvironmentVariables from '../helpers/api';
import axios from 'axios';
const initialState = {
  products: [],
  status: 'idle',
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
        state.status = 'loading';
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.products = [];
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;

export const selectProducts = (state) => state.productsSlice.products;
export const selectProductsStatus = (state) => state.productsSlice.status;

export const productsSelector = createSelector(
  [selectProducts, (state, filterBy) => filterBy],
  (selectProducts, filterBy) => {
    const ALL = 'all';
    const { selectedCategory, keyword } = filterBy;

    if (selectedCategory === ALL && !keyword) {
      return selectProducts;
    }

    return selectProducts.filter((product) => {
      const productCategory = product.category.toLowerCase();
      const productTitle = product.title.toLowerCase();

      const matchesCategory =
        selectedCategory === ALL ||
        productCategory.includes(selectedCategory.toLowerCase());
      const matchesKeyword =
        !keyword || productTitle.includes(keyword.toLowerCase());

      return matchesCategory && matchesKeyword;
    });
  }
);
