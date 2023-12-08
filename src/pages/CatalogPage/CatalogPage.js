import React, { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import CarList from 'components/CarList/CarList';
import css from '../CatalogPage/CatalogPage.module.css';
import fetchCars from '../../Api';
// import Button from 'components/Button/Button';

// import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

function CatalogPage() {
  const [page] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  

  useEffect(() => {
    setIsLoading(true);
    fetchCars(page)
      .then(response => {
        setCars(response);
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      <CarList cars={cars} />
      {/* <ScrollToTop /> */}
      {/* <Button onLoadMore={loadMore} /> */}
      <Suspense fallback={<Loader center content="loading" />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CatalogPage;
