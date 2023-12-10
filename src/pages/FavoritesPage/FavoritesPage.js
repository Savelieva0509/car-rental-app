import React from 'react';
import { useSelector } from 'react-redux';
import CarList from '../../components/CarList/CarList';
import { selectTotalCars } from '../../redux/totalCars-slice';
import css from '../CatalogPage/CatalogPage.module.css';

const Favorites = () => {
  const totalCars = useSelector(selectTotalCars);
  const favorite = useSelector(state => state.favorite);
  const favoriteCarIds = favorite.favoriteList;

  const favoriteCars = totalCars.filter(car => favoriteCarIds.includes(car.id));

  return (
    <div className={css.catalogContainer}>
      <CarList cars={favoriteCars} />
    </div>
  );
};

export default Favorites;
