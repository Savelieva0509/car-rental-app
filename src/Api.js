const axios = require('axios');

// Функция для выполнения запроса с использованием пагинации и лимитом 20 машин на странице
async function fetchCars(page) {
  try {
    const limit = 20;
    const apiUrl = `https://6571f80ad61ba6fcc0141958.mockapi.io/cars?page=${page}&limit=${limit}`;
    const response = await axios.get(apiUrl);

    // Обработка данных, полученных из API
    const carsData = response.data;
    console.log('Данные об автомобилях:', carsData);
    return carsData;
  } catch (error) {
    console.error('Error getting total cars:', error);
    throw error;
  }
}

export default fetchCars;
