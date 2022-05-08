import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from './cartItems/cartSlice';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
  },
});
