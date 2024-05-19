import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBookingDate } from "../../rtk/reducer/userBookingDataReducer";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import adminService from "../../services/admin";

export default function GateAvailableTable({
  booked,
  setShowSearchAvailability,
  setShowAddBookingDetails,
}) {
  const dispatch = useDispatch();
  const [holidays, setHolidays] = useState([]);
  const [bookings, setBookings] = useState({
    // Example booking data, replace with real data fetching
    "29/05/2024": 1,
    "30/05/2024": 2,
    "01/06/2024": 4,
  });

  // Access the state from the Redux store
  const userBookingData = useSelector((state) => state.userBookingData);
  const { gate, startDate } = userBookingData;

  // Convert startDate to a JavaScript Date object
  const startDateObject = new Date(startDate);

  // Function to format the date as 'DD/MM/YYYY'
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  // Utility function to check if a date is within any holiday range
  const isHoliday = (date) => {
    return holidays.some(
      (holiday) => date >= holiday.startDate && date <= holiday.endDate
    );
  };

  // Utility function to get the next valid date
  const getNextValidDate = (currentDate) => {
    let date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    while (isHoliday(date)) {
      date.setDate(date.getDate() + 1);
    }
    return date;
  };

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await adminService.searchHoliday(token);

        if (Array.isArray(response.Records)) {
          const holidayDates = response.Records.map((holiday) => {
            const startDateParts = holiday.DATE_FROM.split("-").map(Number);
            const startDate = new Date(
              startDateParts[0],
              startDateParts[1] - 1,
              startDateParts[2]
            );

            const endDate = new Date(holiday.DATE_TO);
            return { startDate, endDate };
          });
          setHolidays(holidayDates);
        } else {
          setHolidays([]);
        }
      } catch (error) {
        console.error("Error fetching holidays:", error);
      }
    };

    fetchHolidays();
  }, []);

  // Array of three valid dates
  const dateArray = [startDateObject];
  for (let i = 1; i < 3; i++) {
    const nextValidDate = getNextValidDate(dateArray[dateArray.length - 1]);
    dateArray.push(nextValidDate);
  }

  // Function to handle booking
  const handleBooking = (date) => {
    const formattedDate = formatDate(date);
    setBookings((prevBookings) => {
      const currentBooking = prevBookings[formattedDate] || 0;
      if (currentBooking < 4) {
        return { ...prevBookings, [formattedDate]: currentBooking + 1 };
      }
      return prevBookings;
    });
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "rgba(157, 178, 191, 0.1)",
        backdropFilter: "blur(21px) saturate(200%)",
        WebkitBackdropFilter: "blur(21px) saturate(200%)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.5)", // Increased border visibility
      }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                rowSpan={2}
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  fontWeight: "bold",
                }}
              >
                Gate
              </TableCell>
              {dateArray.map((date, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    fontWeight: "bold",
                  }}
                >
                  {formatDate(date)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {dateArray.map((_, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    fontWeight: "bold",
                  }}
                >
                  Morning
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                sx={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
              >
                {gate}
              </TableCell>
              {dateArray.map((date, index) => {
                const formattedDate = formatDate(date);
                const availableVehicles = 4 - (bookings[formattedDate] || 0);
                return (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      cursor:
                        gate !== "No Gate Selected" ? "pointer" : "default",
                    }}
                    onClick={() => {
                      if (
                        gate !== "No Gate Selected" &&
                        availableVehicles > 0
                      ) {
                        handleBooking(date);
                        setShowAddBookingDetails(true);
                        setShowSearchAvailability(false);
                        dispatch(setBookingDate(formattedDate)); // Dispatch setDate with the selected date
                      }
                    }}
                  >
                    {gate === "No Gate Selected" ? (
                      "_"
                    ) : availableVehicles > 0 ? (
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "green",
                          fontSize: "17px",
                        }}
                      >
                        {availableVehicles}
                      </span>
                    ) : (
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "red",
                          fontSize: "17px",
                        }}
                      >
                        Booked
                      </span>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
