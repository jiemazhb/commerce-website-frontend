// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsById: {},
    totalPrice: 0,
    totalItems: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;  
      const id = item.Id;

      state.totalPrice += item.price * item.quantity;
      state.totalItems += item.quantity;

      if (state.itemsById[id]) {
        state.itemsById[id].quantity += item.quantity;
      } else {
        state.itemsById[id] = { ...item };
      }
      
    },

    removeFromCart: (state, action) => {
      const id = action.payload.Id;
      console.log(action.payload);
      
      if (state.itemsById[id]) {
        state.totalItems -= action.payload.quantity;
        state.totalPrice -= action.payload.quantity * action.payload.price
        delete state.itemsById[id];
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload.Id;
      
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
      state.itemsById[id].quantity += 1;

    },

    decreaseQuantity: (state, action) => {
      const id = action.payload.Id;

      state.totalPrice -= action.payload.price;
      state.totalItems -= 1;

      if (state.itemsById[id]) {
        state.itemsById[id].quantity -= 1;
        if (state.itemsById[id].quantity <= 0) {
          delete state.itemsById[id];
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
