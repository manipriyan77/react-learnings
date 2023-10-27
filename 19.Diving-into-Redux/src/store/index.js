import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, toggleCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.toggleCounter = !state.toggleCounter;
    },
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { authenticated: false },
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const store = createStore(counterSlice.reducer);

// function counterReducer(state = { counter: 0 }, action) {
//   if (action.type === 'increment') {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === 'decrement') {
//     return { counter: state.counter - 1 };
//   }
//   return state;
// }

export default store;
