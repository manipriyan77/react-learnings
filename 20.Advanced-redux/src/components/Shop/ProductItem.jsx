import { useSelector, useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store';

const ProductItem = ({ price, description }) => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.cart.productName);

  // const { title, price, description } = props;

  function addToCartHandler() {
    dispatch(cartActions.addProduct());
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
