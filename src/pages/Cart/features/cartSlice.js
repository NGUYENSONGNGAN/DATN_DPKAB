import { createSlice } from '@reduxjs/toolkit';
import Data from './cartItems';
const initialState = {
  cartIterm: Data,
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      return { cartIterm: [] };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartIterm = state.cartIterm.filter((item) => item.MaSanPham !== itemId);
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartIterm.find((item) => item.MaSanPham === itemId);

      cartItem.SoLuong = cartItem.SoLuong + 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartIterm.find((item) => item.MaSanPham === itemId);
      cartItem.SoLuong = cartItem.SoLuong - 1;
    },
    /* calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      console.log(state.cartItem);
      state.cartItem.forEach((item) => {
        amount += item.donGiaMoi;
        total += item.donGiaMoi * item.SoLuong;
      });
      state.amount = amount;
      state.total = total;
    }, */
  },
});

/* console.log(cartSlice) */
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
