import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteList: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteList: (state, action) => {
      state.favoriteList.push(action.payload);
    },
    removeFavoriteList: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        item => item !== action.payload
      );
    },
  },
});

export const { addFavoriteList, removeFavoriteList } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
