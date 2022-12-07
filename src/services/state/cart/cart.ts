import { createSlice } from "@reduxjs/toolkit";
import { ICart, IPlant } from "@types";

const initialState = {
  items: [] as IPlant[],
  displayCart: false,
  subTotal: 0,
} as ICart;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.displayCart = true;
    },
    hideCart: (state) => {
      state.displayCart = false;
    },
    addToCart: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.amount += 1;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
    },
    incrementAmount: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.amount += 1;
      }
    },
    decrementAmount: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.amount -= 1;
        if (item.amount === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  toggleCart,
  hideCart,
  addToCart,
  incrementAmount,
  decrementAmount,
} = cartSlice.actions;
