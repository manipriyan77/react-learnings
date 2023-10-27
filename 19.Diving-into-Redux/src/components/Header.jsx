import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';

import { authActions } from '../store';
const Header = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector((state) => state.auth.authenticated);

  const logoutHandler = () => {
    console.log('clicked', authenticated);
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
