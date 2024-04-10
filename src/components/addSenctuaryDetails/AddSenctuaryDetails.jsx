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
export default function SanctuaryDetails() {
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
            variant="outlined"
            size="small"
            value={selectedPlace}
            onChange={handlePlaceChange}
          >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Zone"
            select
            variant="outlined"
            size="small"
            value={selectedZone}
            onChange={handleZoneChange}
          >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            label="Select vehicle"
            select
            variant="outlined"
            size="small"
            value={selectedVehicle}
            onChange={handleVehicleChange}
          >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={1}>
          <Button fullWidth variant="contained">
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" spacing={1} mt={2}>
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
      
    </Box>
  );
}
