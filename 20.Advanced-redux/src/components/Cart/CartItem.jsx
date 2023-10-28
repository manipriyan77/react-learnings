import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;

  function handleAddProduct() {
    dispatch(cartActions.addProduct());
  }

  function handleRemoveProduct() {
    dispatch(cartActions.removeProduct());
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveProduct}>-</button>
          <button onClick={handleAddProduct}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
