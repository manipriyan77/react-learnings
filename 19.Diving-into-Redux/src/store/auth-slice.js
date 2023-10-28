import { createSlice } from '@reduxjs/toolkit';

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

export const authActions = authSlice.actions;

export default authSlice;
