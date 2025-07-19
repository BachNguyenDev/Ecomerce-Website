import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    popup: popupReducer,
    auth: authReducer,
    cart: cartReducer
  },
});

export default store;
