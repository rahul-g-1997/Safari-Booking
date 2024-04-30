import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/userReducer";
import otpReducer from "./reducer/otpReducer";
import loaderReducer from "./reducer/loaderReducer";

const store = configureStore({
  reducer: {
    auth: authReducer, // Combine reducers, 'authReducer' is responsible for managing authentication state
    otp: otpReducer,
    loader: loaderReducer,
  },
});

export default store;
