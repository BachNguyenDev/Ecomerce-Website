import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const parsePrice = (price) =>
  typeof price === "string" ? Number(price.replace(/,/g, "")) : Number(price);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_CART: (state, action) => {
      const newItem = action.payload;
      const price = parsePrice(newItem.price);
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * price;
      } 
      else {
        state.items.push({
          ...newItem,
          price, // Lưu lại dạng số
          quantity: 1,
          totalPrice: price,
        });
      }
      
      state.totalQuantity += 1;
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    
    UPDATE_CART: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        const quantityDifference = quantity - item.quantity;
        item.quantity = quantity;
        item.totalPrice = item.quantity * item.price;
        
        
        state.totalQuantity += quantityDifference;
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
      }
    },
    
    DELETE_CART: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        // Giảm tổng số lượng
        state.totalQuantity -= item.quantity;
        
        // Xóa item khỏi cart
        state.items = state.items.filter(item => item.id !== id);
        
        // Cập nhật tổng tiền
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
      }
    },
  },
});

export const { ADD_CART, UPDATE_CART, DELETE_CART } = cartSlice.actions;
export default cartSlice.reducer;
