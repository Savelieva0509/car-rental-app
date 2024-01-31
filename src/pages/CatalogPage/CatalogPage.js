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
  const [filteredCars, setFilteredCars] = useState([]);
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
      if (
        filters.make ||
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredCars = cars.filter(car => {
          if (filters.make && car.make !== filters.make.value) {
            return false;
          }

          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(
              priceObj => priceObj.value === car.rentalPrice.replace('$', '')
            )
          ) {
            return false;
          }

          if (filters.minMileage && car.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && car.mileage > filters.maxMileage) {
            return false;
          }

          return true;
        });

        setFilteredCars(filteredCars);
      } else {
        setFilteredCars([]);
      }
    }
  }, [filters, cars, isFiltering]);

  const renderedCars = isFiltering ? (
    filteredCars !== null && filteredCars.length > 0 ? (
      <CarList cars={filteredCars} />
    ) : (
      <div>No matches found based on the chosen criteria.</div>
    )
  ) : error ? (
    <>Oops, there was an error...</>
  ) : isLoading ? (
    <Loader />
  ) : cars.length > 0 ? (
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
