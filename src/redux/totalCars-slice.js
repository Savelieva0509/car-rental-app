import { createSlice } from '@reduxjs/toolkit';

const totalCarsSlice = createSlice({
  name: 'totalCars',
  initialState: [],
  reducers: {
    setTotalCars: (state, action) => {
      console.log('Payload received in setTotalCars:', action);
      if (Array.isArray(action.payload)) {
        return action.payload;
      } else {
        console.error('Payload is not an array:', action.payload);
        // Возвращаем пустой массив, если данные не являются массивом
        return [];
      }
    },
  },
});

export const { setTotalCars } = totalCarsSlice.actions;
export const selectTotalCars = state => {
  console.log('Current Redux State:', state); // Отобразить состояние хранилища
  return state.totalCars; // Вернуть данные из хранилища
};
export default totalCarsSlice.reducer;
