// import axios from 'axios';

// async function getTotalCars(page) {
//   try {
//     const limit = 20;
//     const apiUrl = `https://6571f80ad61ba6fcc0141958.mockapi.io/cars?page=${page}&limit=${limit}`;
//     const response = await axios.get(apiUrl);
//     const carsData = response.data;
//     console.log(carsData);
//     return carsData;
    
//   } catch (error) {
//     console.error('Error getting total cars:', error);
//     throw error;
//   }
// }

// export default getTotalCars;

import axios from 'axios';
axios.defaults.baseURL = 'https://6571f80ad61ba6fcc0141958.mockapi.io';

export const getTotalCars = async () => {
  try {
    const { data } = await axios.get(`/cars`);
    console.log(data)
    return data;
    
  } catch (error) {
    console.error('Error getting total cars:', error);
    throw error;
  }
};