import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/loginReducer";
import userReducer from "./reducer/userReducer";
import otpReducer from "./reducer/otpReducer";
const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    otp: otpReducer,
  },
});

export default store;
