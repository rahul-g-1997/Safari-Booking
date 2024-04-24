import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/loginReducer";
import authReducer from "./reducer/userReducer";
import otpReducer from "./reducer/otpReducer";
const store = configureStore({
  reducer: {
    auth: authReducer, // Combine reducers, 'authReducer' is responsible for managing authentication state
    login: loginReducer,
    otp: otpReducer,
  },
});

export default store;
