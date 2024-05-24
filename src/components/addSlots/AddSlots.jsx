import { useEffect, useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import adminService from "./../../services/admin";
import SlotsTable from "./slotsTable";

const AddSlot = () => {
  const [slotName, setSlotName] = useState("");
  const [timing, setTiming] = useState("");
  const [capacity, setCapacity] = useState("");
  const [slots, setSlots] = useState([]);
  const token = localStorage.getItem("token");

  const handleAddSlot = async () => {
    try {
      const result = await adminService.addSlot(
        token,
        slotName,
        timing,
        capacity
      );
      console.log("Slot added successfully:", result);
      setSlotName("");
      setTiming("");
      setCapacity("");
      // Reset form fields or show success message
    } catch (error) {
      console.error("Error adding slot:", error);
    }
  };

  const handleSearchSlot = async () => {
    try {
      const result = await adminService.searchSlot(token);
      setSlots(result.Records);
    } catch (error) {
      console.error("Error searching for slots:", error);
    }
  };

  // Fetch slots on component mount
  useEffect(() => {
    handleSearchSlot();
  }, [handleAddSlot]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            label="Slot Name"
            size="small"
            variant="outlined"
            value={slotName}
            onChange={(e) => setSlotName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            label="Timing"
            size="small"
            variant="outlined"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            fullWidth
            label="Capacity"
            size="small"
            variant="outlined"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={handleAddSlot}
          >
            Add Slot
          </Button>
        </Grid>
        {/* Bottom: Table of already added operators */}
        <Grid item xs={12}>
          <SlotsTable slots={slots} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddSlot;
