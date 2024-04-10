import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  safariAvailable: 6,
};

const safariSlice = createSlice({
  name: "safari",
  initialState,
  reducers: {
    updateSafariAvailable: (state, action) => {
      state.safariAvailable = action.payload;
    },
  },
});

export const { updateSafariAvailable } = safariSlice.actions;

export default safariSlice.reducer;
