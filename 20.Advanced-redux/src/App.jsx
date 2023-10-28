import { Provider, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import store from './store';

function App() {
  const toggleState = useSelector((state) => state.cart.toggleCart);
  return (
    <Layout>
      {toggleState && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
