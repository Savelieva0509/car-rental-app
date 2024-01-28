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

import {
  setFilterMake,
  setFilterPrice,
  setFilterMinMileage,
  setFilterMaxMileage,
  selectSelectedMake,
  selectSelectedPrice,
  selectMinMileage,
  selectMaxMileage,
} from '../../redux/filter-slice';
import { setTotalCars } from '../../redux/totalCars-slice';
import { fetchCars } from '../../redux/cars-operation';

function CatalogPage() {
  const cars = useSelector(selectCars);
  //const totalCars = useSelector(selectTotalCars);
  const selectedMake = useSelector(selectSelectedMake);
  const selectedPrice = useSelector(selectSelectedPrice);
  const selectedMinMileage = useSelector(selectMinMileage);
  const selectedMaxMileage = useSelector(selectMaxMileage);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [carMakes, setCarMakes] = useState([]);
  const [carPrices, setCarPrices] = useState([]);

  console.log(carPrices);

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

  useEffect(() => {
    const makes = [...new Set(cars.map(car => car.make))];
    setCarMakes(makes);

    const prices = [...new Set(cars.map(car => car.rentalPrice))];
    setCarPrices(prices);
    
    const filteredCars = cars.filter(car => {
      const makeFilter = !selectedMake || car.make === selectedMake.label;
      const priceFilter =
        !selectedPrice ||
        parseFloat(car.rentalPrice.slice(1)) === selectedPrice.value;
      const mileageFilter =
        (!selectedMinMileage || car.mileage >= selectedMinMileage) &&
        (!selectedMaxMileage || car.mileage <= selectedMaxMileage);

       const passedFilters = makeFilter && priceFilter && mileageFilter;

      //console.log('Car:', car, 'Passed Filters:', passedFilters);

       return passedFilters;
    });
console.log('Filtered Cars:', filteredCars);
    setFilteredCars(filteredCars);
  }, [
    cars,
    selectedMake,
    selectedPrice,
    selectedMinMileage,
    selectedMaxMileage,
  ]);
  const handleMakeChange = selectedMake => {
    dispatch(setFilterMake(selectedMake));
  };

  const handlePriceChange = selectedPrice => {
    dispatch(setFilterPrice(selectedPrice));
  };

  const handleFilterClick = (
    selectedMake,
    selectedPrice,
    selectedMinMileage,
    selectedMaxMileage
  ) => {
    dispatch(setFilterMake(selectedMake));
    dispatch(setFilterPrice(selectedPrice));
    dispatch(setFilterMinMileage(selectedMinMileage));
    dispatch(setFilterMaxMileage(selectedMaxMileage));

// console.log('Filter Clicked!');
// console.log('Selected Make:', selectedMake);
// console.log('Selected Price:', selectedPrice);
// console.log('Selected Min Mileage:', selectedMinMileage);
// console.log('Selected Max Mileage:', selectedMaxMileage);



    const filteredCars = cars.filter(car => {
      const makeFilter = !selectedMake || car.make === selectedMake.label;
      const priceFilter =
        !selectedPrice ||
        parseFloat(car.rentalPrice.slice(1)) === selectedPrice.value;
      const mileageFilter =
        (!selectedMinMileage || car.mileage >= selectedMinMileage) &&
        (!selectedMaxMileage || car.mileage <= selectedMaxMileage);

      return makeFilter && priceFilter && mileageFilter;
    });

    setFilteredCars(filteredCars);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.catalogContainer}>
      {isLoading && <Loader />}
      <Filter
        makes={carMakes}
        prices={carPrices}
        handleMakeChange={handleMakeChange}
        handlePriceChange={handlePriceChange}
        handleFilterClick={handleFilterClick}
      />
      <CarList cars={filteredCars.length !== 0 ? filteredCars : cars} />
      {cars.length !== 0 && <ButtonLoadMore onLoadMore={loadMore} />}
      <Suspense fallback={<Loader center content="loading" />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CatalogPage;
