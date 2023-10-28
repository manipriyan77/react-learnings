import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authSlice from './auth-slice';

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

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
