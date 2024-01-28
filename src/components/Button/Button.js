import css from '../Button/Button.module.css';

const Button = ({ onClick }) => {
    return (
      <button type="button"className={css.buttonSearch} onClick={onClick}>
            Search
      </button>
  );
};

export default Button;
