import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addFavoriteList: (state, action) => {
      state.push(action.payload);
    },
    removeFavoriteList: (state, action) => {
      return state.filter(item => item !== action.payload);
    },
  },
});

export const { addFavoriteList, removeFavoriteList } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
