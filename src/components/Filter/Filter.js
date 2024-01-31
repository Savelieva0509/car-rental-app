import { React, useState } from 'react';
import { toast } from 'react-toastify';
import Select from 'react-select';
import Button from 'components/Button/Button';
import css from './Filter.module.css';

const Filter = ({ makes, prices, onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPriceStep, setSelectedPriceStep] = useState(null);
  const [selectedPriceLabel, setSelectedPriceLabel] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const [, setIsMakeFiltering] = useState(false);
  const [, setIsPriceFiltering] = useState(false);
  const [, setIsMileageFiltering] = useState(false);

  const makeOptions = makes.map(make => ({ value: make, label: make }));

  const priceRangeOptions = Array.from({ length: 48 }, (_, index) => {
    const price = 30 + index * 10;
    return { value: price, label: `${price}` };
  });

  const handlePriceStepChange = selectedOption => {
    if (selectedOption) {
      setSelectedPriceStep(selectedOption.value);
      setSelectedPriceLabel(selectedOption.label);
      setIsPriceFiltering(true);
    } else {
      setSelectedPriceStep(null);
      setSelectedPriceLabel('');
      setIsPriceFiltering(false);
    }
  };

  const filteredPrices = prices.filter(price => price <= selectedPriceStep);

  const formatMileage = value => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  const handleInputChange = (e, setValue) => {
    const inputValue = e.target.value;

    setValue(inputValue);
    setIsMileageFiltering(!!inputValue);
  };

  const handleFilterClick = () => {
    const minMileage = parseInt(minValue.replace(/,/g, ''), 10);
    const maxMileage = parseInt(maxValue.replace(/,/g, ''), 10);

    if (minMileage > maxMileage) {
      toast.error('The maximum mileage must exceed the minimum mileage.');
      return;
    }

    const newFilters = {
      make: selectedMake,
      filteredPrices:
        filteredPrices.map(price => ({
          value: price,
          label: `${price}`,
        })) || [],
      minMileage,
      maxMileage,
    };
    console.log(newFilters, 'newFilters');
    onFilterChange(newFilters);
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
          onChange={selectedOption => {
            setSelectedMake(selectedOption);
            setIsMakeFiltering(!!selectedOption);
          }}
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
          isClearable={true}
          value={
            selectedPriceStep
              ? { value: selectedPriceStep, label: selectedPriceLabel }
              : null
          }
          onChange={selectedOption => {
            handlePriceStepChange(selectedOption);
            setIsPriceFiltering(!!selectedOption);
          }}
          options={priceRangeOptions}
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
            value={formatMileage(minValue)}
            onChange={e =>
              handleInputChange(e, setMinValue, setIsMileageFiltering)
            }
          />

          <input
            className={css.InputRight}
            placeholder="To"
            type="text"
            value={formatMileage(maxValue)}
            onChange={e =>
              handleInputChange(e, setMaxValue, setIsMileageFiltering)
            }
          />
        </div>
      </form>
      <Button onClick={handleFilterClick} />
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
