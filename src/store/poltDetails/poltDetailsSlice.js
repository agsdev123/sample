import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { message } from "antd";
export const todoAdapter = createEntityAdapter();
const plotdetailsSlice = createSlice({
  name: "plotdetails",
  initialState: {
    plotdetails: [],
  },
  reducers: {
    addplotdetails: {
      reducer: (state, action) => {
        state.plotdetails=[action.payload];
      },
    },

    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const { addplotdetails } = plotdetailsSlice.actions;
export default plotdetailsSlice.reducer;
