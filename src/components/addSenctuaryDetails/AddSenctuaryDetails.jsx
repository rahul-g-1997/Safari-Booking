import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import "./AddSenctuaryDetails.css";
import { BookingCalendar } from "..";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import GateAvailableTable from "../gateAvailableTable/GateAvailableTable";

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
  const [selectGate, setSelectedGate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGateTable, setShowGateTable] = useState(false);

  const handleShowGateTable = () => {
    setShowGateTable(true);
  };

  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
  };
  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
  };
  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const handleGateChange = (event) => {
    setSelectedGate(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Handle the selected date here, such as storing it in state or sending it to the server
    console.log("Selected Date:", date);
    setShowCalendar(!showCalendar);
  };

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
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
        <Grid item xs={12} md={2}>
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
            label="Gate"
            select
            size="small"
            variant="outlined"
            value={selectGate}
            onChange={handleGateChange}
          >
            <MenuItem value={1}>Navegaon Gate (Core)</MenuItem>
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
            <MenuItem value={"G"}>Gypsy</MenuItem>
            <MenuItem value={"P"}>Private</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={3} mt={-1}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ position: "relative" }}>
              <DemoContainer components={["SingleInputDateRangeField"]}>
                <SingleInputDateRangeField
                  label="Form - To"
                  size="small"
                  onClick={handleCalendarToggle}
                />
                {showCalendar && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      zIndex: 1000,
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    <BookingCalendar
                      selectedDate={selectedDate}
                      onDateSelect={handleDateSelect}
                    />
                  </div>
                )}
              </DemoContainer>
            </div>
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={1}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleShowGateTable()}
          >
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
      <Grid m={2}>
        {showGateTable && (
          <GateAvailableTable
            setShowBooking={setShowBooking}
            setShowAddSenctuaryDetails={setShowAddSenctuaryDetails}
          />
        )}
      </Grid>
      <Divider />
    </Box>
  );
}
