import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const title = useSelector((state) => state.cart.productName);
  const quantity = useSelector((state) => state.cart.product);
  const price = useSelector((state) => state.cart.productValue);
  const total = price * quantity;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem item={{ title, quantity, total, price }} />
      </ul>
    </Card>
  );
};

export default Cart;
