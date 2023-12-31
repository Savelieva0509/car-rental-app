import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import CarList from 'components/CarList/CarList';
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

  return (
    <div className={css.catalogContainer}>
      {isLoading && <Loader />}
      <CarList cars={cars} />
      {cars.length !== 0 && (
        <>
          {/* <Filter /> */}
          <CarList cars={cars} />

          {totalCars.length > cars.length && (
            <ButtonLoadMore onLoadMore={loadMore} />
          )}
        </>
      )}
      <Suspense fallback={<Loader center content="loading" />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CatalogPage;
