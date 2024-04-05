import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/loginReducer";
const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
