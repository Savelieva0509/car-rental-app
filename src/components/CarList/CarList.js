import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { HiHeart } from 'react-icons/hi';
import { HiOutlineHeart } from 'react-icons/hi';
import Modal from '../Modal/Modal';
import css from '../CarList/CarList.module.css';

import {
  addFavoriteList,
  removeFavoriteList,
} from '../../redux/favorite-slice';

const CarList = ({ cars }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorite = useSelector(state => state.favorite);
  console.log(favorite);
const isFavorite = carId => {
  return (
    favorite.favoriteList.length > 0 &&
    favorite.favoriteList.some(item => item.id === carId)
  );
};

  const openModal = carId => {
    setIsModalOpen(prevState => ({
      ...prevState,
      [carId]: true,
    }));
  };

  const closeModal = carId => {
    setIsModalOpen(prevState => ({
      ...prevState,
      [carId]: false,
    }));
  };

const toggleFavorite = carId => {
  if (!isFavorite(carId)) {
    dispatch(addFavoriteList(carId));
  } else {
    dispatch(removeFavoriteList(carId));
  }
};

  return (
    <div className={css.carListContainer}>
      <ul className={css.carList}>
        {cars.map(
          ({
            model,
            make,
            id,
            img,
            year,
            address,
            rentalPrice,
            rentalCompany,
            type,
            functionalities,
            fuelConsumption,
            engineSize,
            description,
            accessories,
            rentalConditions,
            mileage,
          }) => {
            const addressParts = address.split(', ');
            const city = addressParts[1];
            const country = addressParts[2];
            const firstFunctionality = functionalities[0]
              .split(' ')
              .slice(0, 1)
              .join(' ');

            return (
              <li className={css.carItem} key={id}>
                <img src={img} alt="car" className={css.carImage} />
                <div
                  className={css.likeIcon}
                  onClick={() => toggleFavorite(id)}
                >
                  {isFavorite[id] ? (
                    <HiHeart color={'#3470ff'} size={18} />
                  ) : (
                    <HiOutlineHeart size={18} />
                  )}
                </div>
                <div className={css.titleContainer}>
                  <div className={css.titleInfo}>
                    <p className={css.titleInfoText}>{make}&nbsp;</p>
                    <p
                      className={`${css.titleInfoText} ${css.titleInfoTextBlue}`}
                    >
                      {model}&#44;&nbsp;
                    </p>
                    <p className={css.titleInfoText}>{year}</p>
                  </div>
                  <p className={css.titleInfoText}>{rentalPrice}</p>
                </div>
                <div className={css.infoContainer}>
                  <p className={css.infoText}>{city}</p>
                  <p className={css.infoText}>{country}</p>
                  <p className={css.infoText}>{rentalCompany}</p>
                  <p className={css.infoText}>{type}</p>
                  <p className={css.infoText}>{model}</p>
                  <p className={css.infoText}>{id}</p>
                  <p className={css.infoText}>{firstFunctionality}</p>
                </div>
                <button
                  type="button"
                  className={css.buttonLearnMore}
                  onClick={() => openModal(id)}
                >
                  Learn more
                </button>
                {isModalOpen[id] && (
                  <Modal
                    onClose={() => closeModal(id)}
                    key={id}
                    model={model}
                    make={make}
                    year={year}
                    rentalPrice={rentalPrice}
                    address={address}
                    rentalCompany={rentalCompany}
                    functionalities={functionalities}
                    id={id}
                    type={type}
                    img={img}
                    fuelConsumption={fuelConsumption}
                    engineSize={engineSize}
                    description={description}
                    accessories={accessories}
                    rentalConditions={rentalConditions}
                    mileage={mileage}
                  ></Modal>
                )}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
