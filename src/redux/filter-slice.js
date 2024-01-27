import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterCars',
  initialState: {
    selectedMake: null,
    selectedPrice: null,
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

export const selectSelectedMake = state => {
  
  return state.filterCars.selectedMake;
};

export const selectSelectedPrice = state => {
  
  return state.filterCars.selectedPrice;
};

export const filterReducer = filterSlice.reducer;
