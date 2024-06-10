import axios from 'axios';
axios.defaults.baseURL =
  'https://6666cf0ba2f8516ff7a50825.mockapi.io';

export const getTotalCars = async () => {
  try {
    const { data } = await axios.get(`/cars`);
    return data;
  } catch (error) {
    console.error('Error getting total cars:', error);
    throw error;
  }
};
