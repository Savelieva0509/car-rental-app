import PropTypes from 'prop-types';
// import { HiHeart } from 'react-icons/hi';
// import { HiOutlineHeart } from 'react-icons/hi';
import css from '../CarList/CarList.module.css';

const CarList = ({ cars }) => {
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
                <button type="button" className={css.buttonLearnMore}>
                  Learn more
                </button>
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
