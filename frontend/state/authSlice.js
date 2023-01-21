import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import EnvironmentVariables from '../helpers/api';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const initialState = {
  user: {},
  isLoggedIn: false,
  status: 'idle',
  error: null,
};
const API_URL = EnvironmentVariables.API_URL;

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/auth/signin`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await SecureStore.setItemAsync('token', data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const signUp = createAsyncThunk(
  'auth/signIn',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/auth/signup`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await SecureStore.setItemAsync('token', data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      await SecureStore.deleteItemAsync('token');
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    clearError: (state) => {
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        error: null,
        status: 'idle',
      };
    },
  },
  extraReducers: (build) => {
    build
      .addCase(signOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = {};
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
        state.status = 'failed';
      })
      .addMatcher(isAnyOf(signIn.pending, signUp.pending), (state) => {
        state.status = 'loading';
        state.isLoggedIn = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(signIn.fulfilled, signUp.fulfilled),
        (state, action) => {
          state.status = 'succeeded';
          state.isLoggedIn = true;
          state.user = action.payload;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(signIn.rejected, signUp.rejected),
        (state, action) => {
          state.status = 'failed';
          state.isLoggedIn = false;
          state.user = {};
          state.error = action.payload;
        }
      );
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;

// export const { signOut } = authSlice.actions;
