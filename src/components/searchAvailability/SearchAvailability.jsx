import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchAvailability.css";
import { BookingCalendar } from "..";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import GateAvailableTable from "../gateAvailableTable/GateAvailableTable";
import config from "../../services/config";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import configService from "../../services/config";
import {
  setGate,
  setPlace,
  setVehicle,
  setStartDate,
  setEndDate,
  setZone,
} from "../../rtk/reducer/userBookingDataReducer";

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
  setShowAddBookingDetails,
  setShowSearchAvailability,
}) {
  const dispatch = useDispatch();
  const [places, setPlaces] = useState([]);
  const [zones, setZones] = useState([]);
  const [gates, setGates] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectGate, setSelectedGate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGateTable, setShowGateTable] = useState(false);
  const [value, setValue] = useState([]);
  const [booked, setBooked] = useState();

  const handleSearch = async (
    placeId,
    zoneId,
    availableStartDate,
    availableEndDate
  ) => {
    // Mark the function as async
    try {
      const availability = await configService.getAvailability(
        placeId,
        zoneId,
        "Noon", // Default slot value
        availableStartDate,
        availableEndDate
      );

      dispatch(setPlace(selectedPlaceName));
      dispatch(setZone(selectedZoneName));
      dispatch(setGate(selectedGateName));

      dispatch(setVehicle(selectedVehicle === "G" ? "Gypsy" : "Private"));

      const [startDate, endDate] = selectedDate;
      dispatch(setStartDate(startDate.toISOString())); // Convert startDate to ISO string
      dispatch(setEndDate(endDate.toISOString())); // Convert endDate to ISO string
      setBooked(availability.Records);
      setShowGateTable(true);
    } catch (error) {
      console.error(error);
    }
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

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const placesData = await config.getPlaces();
        setPlaces(placesData.Records);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    }
    fetchPlaces(); // Call fetchPlaces function when component mounts
  }, []);

  useEffect(() => {
    async function fetchZones() {
      try {
        if (selectedPlace) {
          const zonesData = await config.getZones(selectedPlace);
          setZones(zonesData.Records);
        } else {
          // If no place is selected, reset zones to an empty array
          setZones([]);
        }
      } catch (error) {
        console.error("Error fetching zones:", error);
      }
    }

    fetchZones(); // Call fetchZones function when selectedPlace changes
  }, [selectedPlace]);

  useEffect(() => {
    async function fetchGates() {
      try {
        if (selectedZone) {
          const gatesData = await config.getGates(selectedZone);
          setGates(gatesData.Records); // Assuming gatesData is an array
        } else {
          // If no zone is selected, reset gates to an empty array
          setGates([]);
        }
      } catch (error) {
        console.error("Error fetching gates:", error);
      }
    }

    fetchGates(); // Call fetchGates function when selectedZone changes
  }, [selectedZone]); // Dependency array to trigger effect when selectedZone changes

  const [selectedDate, setSelectedDate] = useState([]);
  const handleDateSelect = (date) => {
    setSelectedDate(date[0], date[1]);
    // Handle the selected date here, such as storing it in state or sending it to the server
    setShowCalendar(!showCalendar);
  };

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  // Initialize state with current date for both elements

  // useEffect to update value when selectedDate changes
  useEffect(() => {
    const formattedDates = selectedDate.map((date) => dayjs(date));
    setValue(formattedDates);
  }, [selectedDate]);
  // Add console.log for selected data

  const selectedPlaceName =
    places.find((place) => place.PLACEID === selectedPlace)?.PLACE_NM ||
    "No Place Selected";

  const selectedZoneName =
    zones.find((zone) => zone.ZONEID === selectedZone)?.ZONE_NM ||
    "No Zone Selected";

  const selectedGateName =
    gates.find((gate) => gate.GATEID === selectGate)?.GATE_NM ||
    "No Gate Selected";

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
            {places.map((place) => (
              <MenuItem key={place.PLACEID} value={place.PLACEID}>
                {place.PLACE_NM}
              </MenuItem>
            ))}
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
            {zones.map((zone) => (
              <MenuItem key={zone.ZONEID} value={zone.ZONEID}>
                {zone.ZONE_NM}
              </MenuItem>
            ))}
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
            {gates.map((gate) => (
              <MenuItem key={gate.GATEID} value={gate.GATEID}>
                {gate.GATE_NM}
              </MenuItem>
            ))}
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
                  value={value}
                  onClick={handleCalendarToggle}
                  format="DD/MM/YYYY"
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
            onClick={() => handleSearch("1", "2", "2024-04-28", "2024-04-30")}
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
            booked={booked}
            setShowAddBookingDetails={setShowAddBookingDetails}
            setShowSearchAvailability={setShowSearchAvailability}
          />
        )}
      </Grid>
      <Divider />
    </Box>
  );
}
