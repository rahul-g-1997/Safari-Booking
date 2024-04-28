import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the auth slice
const initialState = {
  status: false, // Indicates whether the user is logged in or not
  userData: null, // Holds user data when logged in
};

// Create auth slice using createSlice from Redux Toolkit
const authSlice = createSlice({
  name: "auth", // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer function for login action
    login: (state, action) => {
      state.status = true; // Set status to true indicating user is logged in
      state.userData = action.payload.userData; // Set user data from payload
    },
    // Reducer function for logout action
    logout: (state) => {
      state.status = false; // Set status to false indicating user is logged out
      state.userData = null; // Reset user data
    },
  },
});

// Export login and logout actions
export const { login, logout } = authSlice.actions;

// Export auth reducer
export default authSlice.reducer;
