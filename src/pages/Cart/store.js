import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import modalReducer from './features/modalSlice';
/* import './features/cartSlice' */
/* import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice'; */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
