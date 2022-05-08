import { createSlice } from '@reduxjs/toolkit';

const items =
  localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
  value: items,
};
export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      const idx = state.value.findIndex((val) => val.id === newItem.id);
      if (idx === -1) {
        state.value = [
          ...state.value,
          {
            id: newItem.id,
            quantity: 1,
          },
        ];
      } else {
        state.value[idx].quantity += 1;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.value));
    },
    updateItem: (state, action) => {
      const newItem = action.payload;
      const idx = state.value.findIndex((val) => val.id === newItem.id);
      state.value[idx].quantity = newItem.quantity;

      localStorage.setItem('cartItems', JSON.stringify(state.value));
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((val) => val.id != action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, updateItem, deleteItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
