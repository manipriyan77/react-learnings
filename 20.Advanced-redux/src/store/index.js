import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    product: 0,
    toggleCart: false,
    productName: 'Shoes',
    productValue: 7,
  },
  reducers: {
    addProduct(state) {
      state.product++;
    },
    removeProduct(state) {
      state.product--;
    },
    toggleCart(state) {
      state.toggleCart = !state.toggleCart;
    },
  },
});
const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export const cartActions = cartSlice.actions;

export default store;
