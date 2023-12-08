import PropTypes from 'prop-types';
import css from '../CarList/CarList.module.css';

const CarList = ({ cars }) => {
  
  return (
    <ul className={css.carList}>
      {cars.map(({ model,
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
          mileage, }) => {
          
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
              <p className={css.titleMake}>{make}</p>
              <p className={css.titleModel}>{model}</p>
              <p className={css.titleYear}>{year}</p>
              <p className={css.titleMake}>{rentalPrice}</p>
            </div>
            <div className={css.textContainer}>
              <p className={css.textCar}>{city}</p>
              <p className={css.textCar}>{country}</p>
              <p className={css.textCar}>{rentalCompany}</p>
              <p className={css.textCar}>{type}</p>
              <p className={css.textCar}>{model}</p>
              <p className={css.textCar}>{id}</p>
              <p className={css.textCar}>{firstFunctionality}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
