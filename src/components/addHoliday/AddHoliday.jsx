import { useState } from "react";
import { Button, TextField, Grid, Box } from "@mui/material";
import { BookingCalendar } from "..";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import dayjs from "dayjs";
import admin from "../../services/admin";
import { useEffect } from "react";

export default function AddHoliday() {
  const [remark, setRemark] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [value, setValue] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);

  // useEffect to update value when selectedDate changes
  useEffect(() => {
    const formattedDates = selectedDate.map((date) => dayjs(date));
    setValue(formattedDates);
  }, [selectedDate]);
  // Add console.log for selected data

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };
  const handleDateSelect = (date) => {
    setSelectedDate(date[0], date[1]);
    // Handle the selected date here, such as storing it in state or sending it to the server
    setShowCalendar(!showCalendar);
  };

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };
  const handleSaveHoliday = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      await admin.saveHoliday(selectedDate.toISOString(), remark, token);
      // Clearing the fields after successfully saving the holiday
      setSelectedDate(new Date());
      setRemark("");
      setLoading(false);
      alert("Holiday saved successfully!");
    } catch (error) {
      console.error("Error saving holiday:", error);
      setLoading(false);
      alert("Failed to save holiday. Please try again.");
    }
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ position: "relative" }}>
              <DemoContainer components={["SingleInputDateRangeField"]}>
                <SingleInputDateRangeField
                  label="From - To"
                  size="small"
                  margin
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
        <Grid item xs={12} md={2}>
          <TextField
            label="Remark"
            size="small"
            variant="outlined"
            value={remark}
            onChange={handleRemarkChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            onClick={handleSaveHoliday}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Holiday"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
