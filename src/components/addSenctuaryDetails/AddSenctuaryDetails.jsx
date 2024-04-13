import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./AddSenctuaryDetails.css";

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
SquareIcon.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
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

        <Grid item xs={12} md={2}>
          <div className="smallDatePickerContainer">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </Grid>

        <Grid item xs={12} md={1}>
          <Button fullWidth variant="contained">
            Search
          </Button>
        </Grid>
      </Grid>
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

// Add PropTypes validation
SanctuaryDetails.propTypes = {
  setShowBooking: PropTypes.func.isRequired,
  setShowAddSenctuaryDetails: PropTypes.func.isRequired,
};
