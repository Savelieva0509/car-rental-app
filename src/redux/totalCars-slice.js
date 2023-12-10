import { createSlice } from '@reduxjs/toolkit';

const totalCarsSlice = createSlice({
  name: 'totalCars',
  initialState: [],
  reducers: {
    setTotalCars: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTotalCars } = totalCarsSlice.actions;
export const selectTotalCars = state => state.totalCars;

export default totalCarsSlice.reducer;
