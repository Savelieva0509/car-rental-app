import React from 'react';
import Select from 'react-select';
import Button from 'components/Button/Button';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <div className={css.Container}>
      <div className={css.SelectContainer}>
        <label htmlFor="nameSelect" className={css.Label}>
          Car brand
        </label>
        <Select
          id="nameSelect"
          placeholder="Enter the text"
          value=""
          isClearable={true}
          onChange=""
          options=""
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
          value=""
          onChange=""
          options=""
          styles={selectStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <form className={css.Form}>
        <label className={css.Label}>Car mileage / km</label>
        <div className={css.InputContainer}>
          <input className={css.InputLeft} type="text" value="" onChange="" />
          <span className={css.SpanLeft}>From</span>
          <input className={css.InputRight} type="text" value="" onChange="" />
          <span className={css.SpanRight}>To</span>
        </div>
      </form>
      <Button onClick="" />
    </div>
  );
};

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

export default Filter;
