import React, { useEffect } from 'react';
import css from '../Modal/Modal.module.css';

const Modal = ({
  isOpen,
  onClose,
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
//   useEffect(() => {
//     const handleCloseOnEsc = event => {
//       if (event.keyCode === 27) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleCloseOnEsc);
//     }

//     return () => {
//       document.removeEventListener('keydown', handleCloseOnEsc);
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) {
//     return null;
//   }

     const addressParts = address.split(', ');
     const city = addressParts[1];
    const country = addressParts[2];
    const rentalConditionsSplitted = rentalConditions.split('\n', 3);
    const firstElement = rentalConditionsSplitted[0];
    const match = firstElement.match(/\d+/);
    const number = parseInt(match[0], 10);

    
  return (
    // <div className="overlay">
    //   <div className="modal">
    //     <button className="modalClosebtn" onClick={onClose}>
    //       Закрыть
    //     </button>
    //     <div className="modalContent">{children}</div>
    //   </div>
    //   </div>

    <div className={css.Backdrop} onClick={onClose}>
      <div className={css.ModalContainer}>
        <div className={css.ContentWrapper}>
          <button type="button" aria-label="close button" onClick={onClose}>
            Закрыть
          </button>
          <img className={css.CarImg} src={img} alt={make} />
          <div className={css.InfoWrapper}>
            <div className={css.MainInfo}>
              <div className={css.CarInfo}>
                <div className={css.CarText}>{make}</div>
                <div className={css.ModelBlue}>
                  {model}
                  <span style={{ color: 'black' }}>,</span>
                </div>
                <div className={css.CarText}>{year}</div>
              </div>
            </div>
            <div className={css.SecondaryInfo}>
              <div className={css.SecondaryCarText}>{city}</div>
              <div className={css.SecondaryCarText}>{country}</div>
              <div className={css.SecondaryCarText}>id: {id}</div>
              <div className={css.SecondaryCarText}>Year: {year}</div>
              <div className={css.SecondaryCarText}>Type: {type}</div>
              <div className={css.SecondaryCarText}>
                Fuel Consumption: {fuelConsumption}
              </div>
              <div className={css.SecondaryCarText}>
                Engine Size: {engineSize}
              </div>
            </div>
            <div className={css.Description}>{description}</div>
            <div className={css.Accessories}>
              <div className={css.AccessoriesTitle}>
                Accessories and functionalities:
              </div>
              <ul className={css.AccessoryList}>
                {accessories.map((accessory, index) => (
                  <li key={index} className={css.AccessoryListItem}>
                    {accessory}
                  </li>
                ))}
                {functionalities.map((functionality, index) => (
                  <li key={index} className={css.AccessoryListItem}>
                    {functionality}
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.RentalBlock}>
              <div className={css.RentalTitle}>Rental Conditions:</div>
              <div className={css.RentalInfo}>
                <div className={css.RentalItem}>
                  Minimum age: <span>{number}</span>
                </div>
                <div className={css.RentalItem}>
                  {rentalConditionsSplitted[1]}
                </div>
                <div className={css.RentalItem}>
                  {rentalConditionsSplitted[2]}
                </div>
                <div className={css.RentalItem}>
                  Mileage: <span>{mileage.toLocaleString('en-EN')}</span>
                </div>
                <div className={css.RentalItem}>
                  Price: <span>{rentalPrice}</span>
                </div>
              </div>
            </div>
            <a href="tel:+380730000000" className={css.RentalButton}>
              Rental car
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
