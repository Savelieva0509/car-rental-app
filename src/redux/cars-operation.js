import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6571f80ad61ba6fcc0141958.mockapi.io/';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const responce = await axios.get(`/cars`, {
        params: {
          page: page,
          limit: 20,
        },
      });

      const data = responce.data;

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
