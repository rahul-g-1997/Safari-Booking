import { useEffect, useState } from "react";
import admin from "../../services/admin";
import {
  TextField,
  MenuItem,
  Grid,
  Button,
  Tooltip,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-toastify";
import EcoTouristPlacesTable from "./EcoTouristPlacesTable";
export default function ManageLocations() {
  const [places, setPlaces] = useState([]);
  const [zones, setZones] = useState([]);
  const [gates, setGates] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectGate, setSelectedGate] = useState("");
  const [showPlaceInputField, setShowPlaceInputField] = useState(false);
  const [showZoneInputField, setShowZoneInputField] = useState(false);
  const [showGateInputField, setShowGateInputField] = useState(false);
  const [newPlaceName, setNewPlaceName] = useState("");
  const [newZoneName, setNewZoneName] = useState("");
  const [newGateName, setNewGateName] = useState("");
  const [getall, setGetall] = useState([]);

  const token = localStorage.getItem("token");

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
  };

  const handleGateChange = (event) => {
    setSelectedGate(event.target.value);
  };

  const handleNewPlaceNameChange = (event) => {
    setNewPlaceName(event.target.value);
  };
  const handleNewZoneNameChange = (event) => {
    setNewZoneName(event.target.value);
  };
  const handleNewGateNameChange = (event) => {
    setNewGateName(event.target.value);
  };

  const fetchPlaces = async () => {
    try {
      const placesData = await admin.getPlaces();
      setPlaces(placesData.Records);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  const fetchZones = async () => {
    try {
      if (selectedPlace) {
        const zonesData = await admin.getZones(selectedPlace);
        setZones(zonesData.Records);
      } else {
        // If no place is selected, reset zones to an empty array
        setZones([]);
      }
    } catch (error) {
      console.error("Error fetching zones:", error);
    }
  };

  const fetchGates = async () => {
    try {
      if (selectedZone) {
        const gatesData = await admin.getGates(selectedZone);
        setGates(gatesData.Records);
      } else {
        // If no zone is selected, reset gates to an empty array
        setGates([]);
      }
    } catch (error) {
      console.error("Error fetching gates:", error);
    }
  };

  const handleSavePlace = async () => {
    // Trim whitespace from the input
    const newPlaceNameTrimmed = newPlaceName.trim();

    // Convert the new element name to lower case for case-insensitive comparison
    const newPlaceNameLowerCase = newPlaceNameTrimmed.toLowerCase();

    // Check if the new element name is empty or already exists (case-insensitive)
    if (newPlaceNameTrimmed === "") {
      toast.warn("Please enter a valid place name");
      return;
    }

    const isPlaceExists = places.some(
      (place) => place.PLACE_NM.toLowerCase() === newPlaceNameLowerCase
    );

    if (isPlaceExists) {
      toast.warn("This Place Already Available");
      return;
    }

    try {
      // Save the new place
      await admin.savePlaces(newPlaceNameTrimmed, token);

      // Fetch updated places data
      await fetchPlaces();

      // Show success message
      fetchAllDetails();
      toast.success("Place saved successfully");
    } catch (error) {
      console.error("Error saving place:", error);
      toast.error("Error saving place");
    }

    // Reset states
    setSelectedPlace("");
    setNewPlaceName("");
    setShowPlaceInputField(false);
  };

  const handleDeletePlace = async (placeId) => {
    try {
      await admin.deletePlace(token, placeId);
      // Fetch updated places data
      await fetchPlaces();
      fetchAllDetails();
      toast.success("Place delete successfully");
    } catch (error) {
      console.error("Error deleting place:", error.message);
    }
  };

  const handleSaveZone = async (placeId) => {
    // Trim whitespace from the input
    const newZoneNameTrimmed = newZoneName.trim();

    // Convert the new element name to lower case for case-insensitive comparison
    const newZoneNameLowerCase = newZoneNameTrimmed.toLowerCase();

    // Check if the new element name is empty or already exists (case-insensitive)
    if (newZoneNameTrimmed === "") {
      toast.warn("Please enter a valid zone name");
      return;
    }

    const isZoneExists = zones.some(
      (zone) => zone.ZONE_NM.toLowerCase() === newZoneNameLowerCase
    );

    if (isZoneExists) {
      toast.warn("This Zone Already Available");
      return;
    }

    try {
      // Save the new zone
      await admin.saveZone(`${placeId}`, newZoneNameTrimmed, token);

      // Fetch updated zones data
      await fetchZones();

      // Show success message
      fetchAllDetails();
      toast.success("Zone saved successfully");
    } catch (error) {
      console.error("Error saving zone:", error.message);
      toast.error("Error saving zone");
    }
    // Reset states
    setSelectedZone("");
    setNewZoneName("");
    setShowZoneInputField(false);
  };

  const handleDeleteZone = async (zoneId) => {
    try {
      await admin.deleteZone(token, `${zoneId}`);
      // Fetch updated zones data
      await fetchZones();
      fetchAllDetails();
      toast.success("Zone deleted successfully");
    } catch (error) {
      console.error("Error deleting zone:", error.message);
      toast.error("Error deleting zone");
    }
  };

  const handleSaveGate = async (placeId, zoneId) => {
    // Trim whitespace from the input

    const newGateNameTrimmed = newGateName.trim();

    // Convert the new element name to lower case for case-insensitive comparison
    const newGateNameLowerCase = newGateNameTrimmed.toLowerCase();

    // Check if the new element name is empty or already exists (case-insensitive)
    if (newGateNameTrimmed === "") {
      toast.warn("Please enter a valid gate name");
      return;
    }

    const isGateExists = gates.some(
      (gate) => gate.GATE_NM.toLowerCase() === newGateNameLowerCase
    );

    if (isGateExists) {
      toast.warn("This Gate Already Available");
      return;
    }

    try {
      await admin.saveGate(placeId, zoneId, newGateName, token);
      // Fetch updated gates data
      await fetchGates();
      fetchAllDetails();
      toast.success("Gate saved successfully");
    } catch (error) {
      console.error("Error saving gate:", error.message);
      toast.error("Error saving gate");
    }
    setSelectedGate("");
    setNewGateName("");
    setShowGateInputField(false);
  };

  const handleDeleteGate = async (gateId) => {
    try {
      await admin.deleteGate(token, gateId);
      // Fetch updated gates data
      await fetchGates();
      fetchAllDetails();
      toast.success("Gate deleted successfully");
    } catch (error) {
      console.error("Error deleting gate:", error.message);
      toast.error("Error deleting gate");
    }
  };

  const fetchAllDetails = async () => {
    try {
      const allDetails = await admin.getAllDetails(token);
      setGetall(allDetails.Records);
    } catch (error) {
      console.error("Error fetching all details:", error);
      toast.error("Error fetching all details");
    }
  };

  useEffect(() => {
    fetchAllDetails();
  }, []); // Fetch all details on component mount

  useEffect(() => {
    fetchPlaces();
    fetchZones(); // Call fetchZones function when selectedPlace changes
    fetchGates(); // Call fetchGates function when selectedPlace changes
  }, [selectedPlace, selectedZone]);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      {!showPlaceInputField && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Eco-Tourist-Places"
              select
              size="small"
              variant="outlined"
              value={selectedPlace}
              onChange={handlePlaceChange}
            >
              <MenuItem value="" onClick={() => setShowPlaceInputField(true)}>
                Add Places
              </MenuItem>
              {places.map((place) => (
                <MenuItem key={place.PLACEID} value={place.PLACEID}>
                  {place.PLACE_NM}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {!showZoneInputField && (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  fullWidth
                  label="Zone"
                  select
                  size="small"
                  variant="outlined"
                  value={selectedZone}
                  onChange={handleZoneChange}
                >
                  <MenuItem
                    value=""
                    onClick={() => setShowZoneInputField(true)}
                  >
                    Add Zone
                  </MenuItem>
                  {zones.map((zone) => (
                    <MenuItem key={zone.ZONEID} value={zone.ZONEID}>
                      {zone.ZONE_NM}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {!showGateInputField && (
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    label="Gate"
                    select
                    size="small"
                    variant="outlined"
                    value={selectGate}
                    onChange={handleGateChange}
                  >
                    <MenuItem
                      value=""
                      onClick={() => setShowGateInputField(true)}
                    >
                      Add Gate
                    </MenuItem>
                    {gates.map((gate) => (
                      <MenuItem key={gate.GATEID} value={gate.GATEID}>
                        {gate.GATE_NM}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              )}
            </>
          )}
        </Grid>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {showPlaceInputField && (
            <div>
              <TextField
                fullWidth
                label="Add New Place"
                value={newPlaceName}
                onChange={handleNewPlaceNameChange}
                size="small"
                sx={{ mt: 1, width: 200 }}
              />
              <Button
                onClick={handleSavePlace}
                variant="contained"
                color="primary"
                sx={{ mt: 1, ml: 1 }}
              >
                Save
              </Button>

              <Button
                onClick={() => setShowPlaceInputField(false)}
                variant="contained"
                color="secondary"
                sx={{ mt: 1, ml: 1 }}
              >
                Cancel
              </Button>
            </div>
          )}
          {showPlaceInputField && (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {places.map((place) => (
                <li key={place.PLACEID}>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => handleDeletePlace(place.PLACEID)}
                      color="error"
                      aria-label="delete"
                    >
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                  {place.PLACE_NM}
                </li>
              ))}
            </ul>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {showZoneInputField && !showPlaceInputField && (
            <div>
              <TextField
                fullWidth
                label="Add New Zone"
                value={newZoneName}
                onChange={handleNewZoneNameChange}
                size="small"
                sx={{ mt: isMd ? -5 : 1, ml: isMd ? -15 : 0, width: 200 }}
              />
              <Button
                onClick={() => handleSaveZone(selectedPlace)}
                variant="contained"
                color="primary"
                sx={{ mt: isMd ? -8 : 1, ml: 1 }}
              >
                Save
              </Button>

              <Button
                onClick={() => setShowZoneInputField(false)}
                variant="contained"
                color="secondary"
                sx={{ mt: isMd ? -8 : 1, ml: 1 }}
              >
                Cancel
              </Button>
            </div>
          )}
          {showZoneInputField && (
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                marginLeft: isMd ? -125 : 0,
                marginTop: isMd ? -10 : 0,
              }}
            >
              {zones.map((zone) => (
                <li key={zone.ZONEID}>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => handleDeleteZone(zone.ZONEID)}
                      color="error"
                      aria-label="delete"
                    >
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                  {zone.ZONE_NM}
                </li>
              ))}
            </ul>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {showGateInputField &&
            !showZoneInputField &&
            !showPlaceInputField && (
              <div>
                <TextField
                  fullWidth
                  label="Add New Gate"
                  value={newGateName}
                  onChange={handleNewGateNameChange}
                  size="small"
                  sx={{ mt: isMd ? -5 : 1, ml: isMd ? -30 : 0, width: 200 }}
                />
                <Button
                  onClick={() => handleSaveGate(selectedPlace, selectedZone)}
                  variant="contained"
                  color="primary"
                  sx={{ mt: isMd ? -8 : 1, ml: 1 }}
                >
                  Save
                </Button>

                <Button
                  onClick={() => setShowGateInputField(false)}
                  variant="contained"
                  color="secondary"
                  sx={{ mt: isMd ? -8 : 1, ml: 1 }}
                >
                  Cancel
                </Button>
              </div>
            )}
          {showGateInputField && (
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                marginLeft: isMd ? -235 : 0,
                marginTop: isMd ? -10 : 0,
              }}
            >
              {gates.map((gate) => (
                <li key={gate.GATEID}>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => handleDeleteGate(gate.GATEID)}
                      color="error"
                      aria-label="delete"
                    >
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                  {gate.GATE_NM}
                </li>
              ))}
            </ul>
          )}
        </Grid>
        <Grid container spacing={2} margin={1}>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <EcoTouristPlacesTable getall={getall} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
