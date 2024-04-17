import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import "./AddSenctuaryDetails.css";
import { BookingCalendar } from "..";

const SquareIcon = ({ backgroundColor }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: backgroundColor,
        marginRight: "8px",
        borderRadius: "4px",
      }}
    ></div>
  );
};

export default function SanctuaryDetails({
  setShowBooking,
  setShowAddSenctuaryDetails,
}) {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");

  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
  };
  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
  };
  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Handle the selected date here, such as storing it in state or sending it to the server
    console.log("Selected Date:", date);
  };


  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Eco-Tourist-Places"
            select
            size="small"
            variant="outlined"
            value={selectedPlace}
            onChange={handlePlaceChange}
          >
            <MenuItem value={1}>Tadoba Andheri Tigrt Reserv (Core)</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Zone"
            select
            size="small"
            variant="outlined"
            value={selectedZone}
            onChange={handleZoneChange}
          >
            <MenuItem value={1}>Navegaon Zone (Core)</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            label="Select vehicle"
            select
            size="small"
            variant="outlined"
            value={selectedVehicle}
            onChange={handleVehicleChange}
          >
            <MenuItem value={1}>Gypsy</MenuItem>
          </TextField>
        </Grid>

        {/* <Grid item xs={12} md={2}>
          <BookingCalendar />
        </Grid> */}

        <Grid item xs={12} md={1}>
          <Button fullWidth variant="contained">
            Search
          </Button>
        </Grid>
      </Grid>
      <div>
       
        <BookingCalendar
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />

        {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
      </div>
      <Grid
        container
        justifyContent={{ xs: "center", md: "flex-end" }}
        spacing={1}
        mt={2}
      >
        <Grid item>
          <SquareIcon backgroundColor="green" />
        </Grid>
        <Grid item>Avalable</Grid>
        <Grid item>
          <SquareIcon backgroundColor="red" />
        </Grid>
        <Grid item>Booked</Grid>
        <Grid item>
          <SquareIcon backgroundColor="purple" />
        </Grid>
        <Grid item>Holiday</Grid>
      </Grid>
      <Divider />

      <Grid container justifyContent="flex-end" mt={3}>
        <Grid item xs={12} md={2}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => (
              setShowBooking(true), setShowAddSenctuaryDetails(false)
            )}
          >
            Conform Details
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
