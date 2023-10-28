import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const productCount = useSelector((state) => {
    return state.cart.product;
  });

  function toggleCartHandler() {
    dispatch(cartActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{productCount}</span>
    </button>
  );
};

export default CartButton;
