import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const parsePrice = (price) =>
  typeof price === "string" ? Number(price.replace(/,/g, "")) : Number(price);

const recalculateCart = (state) => {
  state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
  state.totalAmount = state.items.reduce((total, item) => total + item.quantity * item.price, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_CART: (state, action) => {
      const newItem = action.payload;
      const price = parsePrice(newItem.price);
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        alert("Sản phẩm đã tồn tại trong giỏ hàng")
      } else {
        alert("Sản phẩm được thêm thành công")
        state.items.push({
          ...newItem,
          price, 
          quantity: 1,
          totalPrice: price,
        });
      }
      
      
      recalculateCart(state);
    },
    
    UPDATE_CART: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = quantity;
        item.totalPrice = item.quantity * item.price;
        
        recalculateCart(state);
      }
    },
    
    DELETE_CART: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      
    
      recalculateCart(state);
    },
  },
});

export const { ADD_CART, UPDATE_CART, DELETE_CART } = cartSlice.actions;
export default cartSlice.reducer;
