import css from '../Button/Button.module.css';

const Button = ({ text, onClick, width }) => {
    return (
      <button type="button"className={css.buttonSearch}>
            Search
      </button>
  );
};

export default Button;
