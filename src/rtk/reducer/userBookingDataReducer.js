import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the auth slice
const initialState = {
  place: null,
  zone: null,
  gate: null,
  vehicle: null,
  startDate: null,
  endDate: null,
  date: null,
  slot: "Mornig",
};

// Create auth slice using createSlice from Redux Toolkit
const authSlice = createSlice({
  name: "userBookingData", // Slice name
  initialState, // Initial state
  reducers: {
    setPlace: (state, action) => {
      state.place = action.payload;
    },
    setZone: (state, action) => {
      state.zone = action.payload;
    },
    setGate: (state, action) => {
      state.gate = action.payload;
    },
    setVehicle: (state, action) => {
      state.vehicle = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

// Export actions
export const {
  setPlace,
  setZone,
  setGate,
  setVehicle,
  setDate,
  setStartDate,
  setEndDate,
} = authSlice.actions;

// Export auth reducer
export default authSlice.reducer;
