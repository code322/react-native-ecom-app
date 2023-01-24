import { createSlice } from '@reduxjs/toolkit';
const favourteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favourites: [],
  },
  reducers: {
    addToFav: (state, action) => {
      const itemInFav = state.favourites.find(
        (item) => item._id === action.payload._id
      );
      if (itemInFav) {
        return;
      } else {
        state.favourites.push(action.payload);
      }
    },
    removeFromFav: (state, action) => {
      const removeItem = state.favourites.filter(
        (item) => item._id !== action.payload
      );
      state.favourites = removeItem;
    },
  },
});

export default favourteSlice.reducer;
export const { addToFav, removeFromFav } = favourteSlice.actions;
export const selectFavourites = (state) => state.favouriteSlice.favourites;
