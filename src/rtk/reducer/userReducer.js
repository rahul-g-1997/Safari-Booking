import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "123",
    type: "user",
    firstName: "Rahul",
    lastName: "",
    email: "123",
    mobileNumber: "",
    password: "123",
    confirmPassword: "123",
    dob: "",
    gender: "",
    bookingHistory: [],
  },
  {
    id: "admin",
    type: "admin",
    firstName: "admin",
    lastName: "",
    email: "admin",
    mobileNumber: "9637728916",
    password: "admin",
    confirmPassword: "admin",
    dob: "",
    gender: "",
    bookingHistory: [],
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, newData } = action.payload;
      const existingUserIndex = state.findIndex((user) => user.id === id);
      if (existingUserIndex !== -1) {
        state[existingUserIndex] = { ...state[existingUserIndex], ...newData };
      }
    },
    resetPassword: (state, action) => {
      const { email, newPassword } = action.payload;
      const user = state.find((user) => user.email === email);
      if (user) {
        user.password = newPassword;
      }
    },
    resetUsername: (state, action) => {
      const { email, newUsername } = action.payload;
      const user = state.find((user) => user.email === email);
      if (user) {
        user.username = newUsername;
      }
    },
  },
});

export const { addUser, updateUser, resetPassword, resetUsername } =
  userSlice.actions;

export default userSlice.reducer;
