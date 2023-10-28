import { createSlice } from '@reduxjs/toolkit';

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

export const counterActions = counterSlice.actions;

export default counterSlice;
