import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otp: "",
};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
  },
});

export const { setOtp } = otpSlice.actions;

export default otpSlice.reducer;
