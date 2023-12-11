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

// import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

function CatalogPage() {
  const cars = useSelector(selectCars);
  console.log(cars, "cars");

  const totalCars = useSelector(selectTotalCars);
  console.log(totalCars, 'totalCars');

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const total = await getTotalCars();
        console.log(total, "total");
        dispatch(setTotalCars(total));
      } catch (error) {
        console.error('Error fetching total cars:', error);
      }
    };

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
      <CarList cars={cars} />
      {/* <ScrollToTop /> */}
      <ButtonLoadMore onLoadMore={loadMore} />
      <Suspense fallback={<Loader center content="loading" />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CatalogPage;
