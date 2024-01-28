import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterCars',
  initialState: {
    selectedMake: null,
    selectedPrice: null,
    selectedMileage: {
      min: null,
      max: null,
    },
  },
  reducers: {
    setFilterMake: (state, action) => {
      state.selectedMake = action.payload;
    },
    setFilterPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
    setFilterMinMileage: (state, action) => {
      state.selectedMileage.min = action.payload;
    },
    setFilterMaxMileage: (state, action) => {
      state.selectedMileage.max = action.payload;
    },
  },
});

export const {
  setFilterMake,
  setFilterPrice,
  setFilterMinMileage,
  setFilterMaxMileage,
} = filterSlice.actions;

export const selectSelectedMake = state => {
  return state.filterCars.selectedMake;
};

export const selectSelectedPrice = state => {
  return state.filterCars.selectedPrice;
};

export const selectMinMileage = state => {
  return state.filterCars.selectedMileage.min;
};

export const selectMaxMileage = state => {
  return state.filterCars.selectedMileage.max;
};

export const filterReducer = filterSlice.reducer;
