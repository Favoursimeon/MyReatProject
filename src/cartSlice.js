import {createSlice} from "@reduxjs/toolkit";

let initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        let updatedItems = [...state.cart];
        updatedItems[existingItemIndex].quantity += 1;
        state.cart = [...updatedItems];
      } else {
        state.cart = [...state.cart, {...action.payload, ["quantity"]: 1}];
      }

      console.log(state.cart);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
    },
    increaseCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        let updatedItems = [...state.cart];
        updatedItems[existingItemIndex].quantity += 1;
        state.cart = [...updatedItems];
      }
    },
    decreaseCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        let updatedItems = [...state.cart];
        updatedItems[existingItemIndex].quantity -= 1;
        state.cart = [...updatedItems];
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {addToCart, removeFromCart, clearCart, increaseCart, decreaseCart} = cartSlice.actions;

export default cartSlice.reducer;
