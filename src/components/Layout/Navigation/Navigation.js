import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? clsx(css.link, css.active) : css.link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? clsx(css.link, css.active) : css.link
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? clsx(css.link, css.active) : css.link
        }
        to="/favorites"
      >
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
