import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the auth slice
const initialState = {
  place: null,
  zone: null,
  gate: null,
  vehicle: null,
  slot: null,
  startDate: null,
  endDate: null,
  bookingDate: null,
  numberOfTourism: null,
  tourismDetails: [],
  contact: [],
  numberOfCamera: null,
  cameraDetails: [],
  numberOfChildren: null,
  childrenDetails: [],
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
    setSlot: (state, action) => {
      state.slot = action.payload;
    },
    setVehicle: (state, action) => {
      state.vehicle = action.payload;
    },
    setBookingDate: (state, action) => {
      state.bookingDate = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setNumberOfTourism: (state, action) => {
      state.numberOfTourism = action.payload;
    },
    setTourismDetails: (state, action) => {
      state.tourismDetails = action.payload;
    },
    setContact: (state, action) => {
      state.contact = action.payload;
    },
    setNumberOfCamera: (state, action) => {
      state.numberOfCamera = action.payload;
    },
    setCameraDetails: (state, action) => {
      state.cameraDetails = action.payload;
    },
    setNumberOfChildren: (state, action) => {
      state.numberOfChildren = action.payload;
    },
    setChildrenDetails: (state, action) => {
      state.childrenDetails = action.payload;
    },
  },
});

// Export actions
export const {
  setPlace,
  setZone,
  setGate,
  setVehicle,
  setBookingDate,
  setStartDate,
  setEndDate,
  setSlot,
  setNumberOfTourism,
  setTourismDetails,
  setContact,
  setNumberOfCamera,
  setCameraDetails,
  setNumberOfChildren,
  setChildrenDetails,
} = authSlice.actions;

// Export auth reducer
export default authSlice.reducer;
