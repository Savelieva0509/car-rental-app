import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selectedMake: null,
    // Другие возможные фильтры
  },
  reducers: {
    setFilterMake: (state, action) => {
      state.selectedMake = action.payload;
    },
    setFilterPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
  },
});

export const { setFilterMake, setFilterPrice } = filterSlice.actions;

export const selectSelectedMake = state => state.filter.selectedMake;

export const selectSelectedPrice = state => state.filter.selectedMake;

export const filterReducer = filterSlice.reducer;
