import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    ON_LOGIN: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    ON_LOGOUT: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

export const { ON_LOGIN, ON_LOGOUT } = authSlice.actions;
export default authSlice.reducer;