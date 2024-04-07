import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
