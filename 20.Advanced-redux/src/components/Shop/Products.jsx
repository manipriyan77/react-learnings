import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const price = useSelector((state) => state.cart.productValue);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem title="Test" price={price} description="This is a first product - amazing!" />
      </ul>
    </section>
  );
};

export default Products;
