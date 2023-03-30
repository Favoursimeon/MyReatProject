import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      console.log(state.cart)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(x => x.id !== action.payload)
    },
    clearCart: (state) => {
        state.cart = [];
    },
  } 
});

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions;


export default cartSlice.reducer