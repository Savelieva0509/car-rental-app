import { React, useState } from 'react';
import Select from 'react-select';
import Button from 'components/Button/Button';
import css from './Filter.module.css';

const Filter = ({
  makes,
  prices,
  handleMakeChange,
  handlePriceChange,
  handleFilterClick
}) => {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  

  const makeOptions = makes.map(make => ({ value: make, label: make }));
  const uniquePrices = Array.from(
    new Set(prices.map(price => parseInt(price.slice(1))))
  ).sort((a, b) => a - b);

  const priceOptions = uniquePrices.map(price => ({
    value: price,
    label: `${Math.floor(price / 10) * 10}`,
  }));

 const onFilterMake = selectedOption => {
   setSelectedMake(selectedOption);
   handleMakeChange(selectedOption);
   //console.log('Selected Make:', selectedOption);
 };

 const onFilterPrice = selectedOption => {
   setSelectedPrice(selectedOption);
   handlePriceChange(selectedOption);
   //console.log('Selected Price:', selectedOption);
 };

  const handleInputChange = (e, setValue) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue) || inputValue === '') {
      setValue(inputValue);
    }
  };

  return (
    <div className={css.Container}>
      <div className={css.SelectContainer}>
        <label htmlFor="nameSelect" className={css.Label}>
          Car brand
        </label>
        <Select
          id="nameSelect"
          placeholder="Enter the text"
          value={selectedMake}
          isClearable={true}
          onChange={onFilterMake}
          options={makeOptions}
          styles={selectStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <div className={css.SelectContainer}>
        <label htmlFor="priceSelect" className={css.Label}>
          Price/ 1 hour
        </label>
        <Select
          id="priceSelect"
          placeholder="To $"
          value={selectedPrice}
          onChange={onFilterPrice}
          options={priceOptions}
          styles={selectStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <form className={css.Form}>
        <label className={css.Label}>Car mileage / km</label>
        <div className={css.InputContainer}>
          <input
            className={css.InputLeft}
            type="text"
            placeholder="From"
            value={minValue}
            onChange={e => handleInputChange(e, setMinValue)}
          />

          <input
            className={css.InputRight}
            placeholder="To"
            type="text"
            value={maxValue}
            onChange={e => handleInputChange(e, setMaxValue)}
          />
        </div>
      </form>
      <Button
        onClick={() =>
          handleFilterClick(selectedMake, selectedPrice, minValue, maxValue)
        }
      />
    </div>
  );
};
export default Filter;

const selectStyles = {
  control: styles => ({
    ...styles,
    width: '224px',
    height: '48px',
    borderColor: 'rgba(18, 20, 23, 0.2)',
    border: 'none',
    borderRadius: '14px',
    padding: '8px',
    fontSize: '16px',
    fontFamily: 'Manrope',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    appearance: 'none',
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
    fontFamily: 'Manrope',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 1)',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
};
