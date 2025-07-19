import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  product: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    SHOW_POPUP: (state, action) => {
      state.show = true;
      state.product = action.payload;
    },
    HIDE_POPUP: (state) => {
      state.show = false;
      state.product = null;
    },
  },
});

export const { SHOW_POPUP, HIDE_POPUP } = popupSlice.actions;
export default popupSlice.reducer;
