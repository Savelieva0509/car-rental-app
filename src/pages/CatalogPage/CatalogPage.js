import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import CarList from 'components/CarList/CarList';
import Filter from 'components/Filter/Filter';
import css from '../CatalogPage/CatalogPage.module.css';
import { getTotalCars } from '../../Api';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import { selectCars } from '../../redux/cars-selector';
import { setTotalCars, selectTotalCars } from '../../redux/totalCars-slice';
import { fetchCars } from '../../redux/cars-operation';

function CatalogPage() {
  const cars = useSelector(selectCars);

  const totalCars = useSelector(selectTotalCars);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredCars, setFilteredCars] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const [error] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const total = await getTotalCars();
        dispatch(setTotalCars(total));
      } catch (error) {
        console.error('Error fetching total cars:', error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (prevPage !== page) {
      dispatch(fetchCars(page));
      setPrevPage(page);
    }
  }, [dispatch, page, prevPage]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const makes = cars ? [...new Set(cars.map(car => car.make))] : [];
  const prices = cars
    ? [...new Set(cars.map(car => car.rentalPrice.replace('$', '')))]
    : [];

  
  
  
  useEffect(() => {
       if (isFiltering) {
      console.log('Applying Filters');
      if (
        filters.make ||
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        console.log('Inside Filters Block');
        const filteredCars = cars.filter(car => {
          
          console.log('Checking Car:', car);
          if (filters.make && car.make !== filters.make.value) {
            console.log('Make Filter Failed');
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(
              priceObj => priceObj.value === car.rentalPrice.replace('$', '')
            )
          ) {
            console.log('Price Filter Failed');
            return false;
          }
          if (filters.minMileage && car.mileage < filters.minMileage) {
            console.log('Min Mileage Filter Failed');
            return false;
          }
          if (filters.maxMileage && car.mileage > filters.maxMileage) {
            console.log('Max Mileage Filter Failed');
            return false;
          }
          console.log('Passed All Filters');
          return true;
        });

        console.log('Filtered Cars:', filteredCars);
        setFilteredCars(filteredCars);
      } else {
        console.log('No Filters Applied');
        setFilteredCars([]); // Используем пустой массив, если нет фильтров
      }
    }
  }, [filters, cars, isFiltering]);

  
const renderedCars = isFiltering ? (
  // Відображення відфільтрованих оголошень або повідомлення про відсутність співпадінь
  filteredCars !== null && filteredCars.length > 0 ? (
    filteredCars.map((car, index) => <CarList key={index} cars={[car]} />)
  ) : (
    <div>No matches found based on the chosen criteria.</div>
  )
) : error ? (
  // Відображення повідомлення про помилку
  <>Oops, there was an error...</>
) : isLoading ? (
  // Відображення компонента завантаження
  <Loader />
) : cars.length > 0 ? (
  // Відображення списку автомобілів
  <CarList cars={cars} />
  ) : null;
  

  return (
    <div className={css.catalogContainer}>
      {isLoading && <Loader />}
      <Filter
        makes={makes}
        prices={prices}
        onFilterChange={newFilters => {
          setFilters(newFilters);
          setIsFiltering(true);
        }}
      />
      {renderedCars}
      {!isFiltering && totalCars.length > cars.length && (
        <ButtonLoadMore onLoadMore={loadMore} />
      )}
      <Suspense fallback={<Loader center content="loading" />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CatalogPage;
