import  { useState, useEffect, useCallback } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Divider,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
} from "@mui/material";
import { BookingCalendar } from "..";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import dayjs from "dayjs";
import admin from "../../services/admin";
import { toast } from "react-toastify";

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

export default function AddHoliday() {
  const [remark, setRemark] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [value, setValue] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [holidayRecords, setHolidayRecords] = useState([]);

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

  const handleSaveHoliday = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      // Convert selected dates to Date objects
      const startDate = new Date(selectedDate[0]);
      const endDate = new Date(selectedDate[1]);

      // Subtract one day from the start date
      startDate.setDate(startDate.getDate() + 1);

      // Format dates in the desired format (YYYY-MM-DD)
      const formattedStartDate = startDate.toISOString().split("T")[0];
      const formattedEndDate = endDate.toISOString().split("T")[0];

      await admin.saveHoliday(
        formattedStartDate,
        formattedEndDate,
        remark,
        token
      );

      // Clearing the fields after successfully saving the holiday
      setSelectedDate([]);
      setRemark("");
      setLoading(false);
      toast.success("Holiday saved successfully!");
    } catch (error) {
      console.error("Error saving holiday:", error);
      setLoading(false);
      toast.error("Failed to save holiday. Please try again.");
    }
  }, [selectedDate, remark]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await admin.searchHoliday(token);
        setHolidayRecords(response.Records);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching holidays:", error);
        setLoading(false);
      }
    };

    fetchHolidays();
  }, [handleSaveHoliday]);

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
        <Grid item xs={12}>
          <Box mt={2}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date From</TableCell>
                    <TableCell>Date To</TableCell>
                    <TableCell>Remark</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {holidayRecords
                    .slice()
                    .reverse()
                    .map((record) => (
                      <TableRow key={record.HLDYSID}>
                        <TableCell>{record.DATE_FROM}</TableCell>
                        <TableCell>{record.DATE_TO}</TableCell>
                        <TableCell>{record.REMARK}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
