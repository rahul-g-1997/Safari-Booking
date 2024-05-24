import { useState, useEffect } from "react";
import { TextField, MenuItem, Grid, Box } from "@mui/material";
import staffService from "./../../services/staff";

const ConfirmEntry = () => {
  const [gates, setGates] = useState([]);
  const [selectedGate, setSelectedGate] = useState("");
  const [bookingNumbers, setBookingNumbers] = useState([]);
  const [selectedBookingNumber, setSelectedBookingNumber] = useState("");
  const token = localStorage.getItem("token");

  // Fetch gates on component mount
  useEffect(() => {
    const fetchGates = async () => {
      try {
        const gatesData = await staffService.getStaffGates(token);
        console.log(gatesData);
        setGates(gatesData);
      } catch (error) {
        console.error("Error fetching gates:", error);
      }
    };
    fetchGates();
  }, [token]);

  // Fetch booking numbers when a gate is selected
  useEffect(() => {
    if (selectedGate) {
      const fetchBookingNumbers = async () => {
        try {
          const bookingData = await staffService.getBookingIdByGateId(
            selectedGate
          );
          setBookingNumbers(bookingData);
        } catch (error) {
          console.error("Error fetching booking numbers:", error);
        }
      };
      fetchBookingNumbers();
    }
  }, [selectedGate]);

  const handleGateChange = (event) => {
    setSelectedGate(event.target.value);
    setSelectedBookingNumber(""); // Reset booking number when gate changes
  };

  const handleBookingNumberChange = (event) => {
    setSelectedBookingNumber(event.target.value);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {/* Left Side: Form Inputs */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {/* Select Gate */}
              <TextField
                select
                fullWidth
                margin="normal"
                label="Select Gate"
                size="small"
                value={selectedGate}
                onChange={handleGateChange}
                variant="outlined"
              >
                {gates.map((gate) => (
                  <MenuItem key={gate.GATEID} value={gate.GATEID}>
                    {gate.GATE_NM}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {/* Select Booking Number */}
              <TextField
                select
                fullWidth
                margin="normal"
                label="Select Booking Number"
                size="small"
                value={selectedBookingNumber}
                onChange={handleBookingNumberChange}
                variant="outlined"
                disabled={!selectedGate}
              >
                {bookingNumbers.map((booking) => (
                  <MenuItem key={booking.BOOKING_NO} value={booking.BOOKING_NO}>
                    {booking.BOOKING_NO}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConfirmEntry;
