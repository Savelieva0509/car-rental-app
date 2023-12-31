import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../redux/cars-operation';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.error('Fetch cars rejected. Error:', action.payload);
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const hasCommonElements = action.payload.some(payloadItem => {
          return state.items.some(stateItem => stateItem.id === payloadItem.id);
        });

        if (hasCommonElements) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
      });
  },
});

export const carsReducer = carsSlice.reducer;
