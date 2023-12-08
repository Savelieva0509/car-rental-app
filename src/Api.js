import axios from 'axios';

async function fetchCars(page) {
  try {
    const limit = 20;
    const apiUrl = `https://6571f80ad61ba6fcc0141958.mockapi.io/cars?page=${page}&limit=${limit}`;
    const response = await axios.get(apiUrl);

    const carsData = response.data;
   
    return carsData;
  } catch (error) {
    console.error('Error getting total cars:', error);
    throw error;
  }
}

export default fetchCars;
