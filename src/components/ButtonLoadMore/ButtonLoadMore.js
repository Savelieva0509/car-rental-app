import PropTypes from 'prop-types';
import css from '../ButtonLoadMore/ButtonLoadMore.module.css';

const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <button className={css.buttonLoadMore} type="submit" onClick={onLoadMore}>
      Load more
    </button>
  );
};
ButtonLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
