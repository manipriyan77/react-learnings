import { useSelector, useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/auth-slice';

const Auth = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    console.log('clicked', authenticated);
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
