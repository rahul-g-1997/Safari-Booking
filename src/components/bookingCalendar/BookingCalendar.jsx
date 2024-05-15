import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./bookingCalendar.css"; // Import your custom CSS file for BookingCalendar
import admin from "../../services/admin";
import { CircularProgress } from "@mui/material";

const BookingCalendar = ({ onDateSelect }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

  const bookedDates = [
    new Date(2024, 4, 13),
    new Date(2024, 4, 9),
    new Date(2024, 4, 7),
  ];

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await admin.searchHoliday(token);

        // Assuming holidays are directly available in the response as an array
        const holidayDates = Array.isArray(response.Records)
          ? response.Records.map((holiday) => new Date(holiday.DATE)) // Extracting DATE and converting to Date objects
          : []; // If response is not an array, set empty array
        setHolidays(holidayDates); // Setting holiday dates in the state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching holidays:", error);
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  const isBooked = (date) => {
    return bookedDates.some((bookedDate) => {
      return (
        date.getDate() === bookedDate.getDate() &&
        date.getMonth() === bookedDate.getMonth() &&
        date.getFullYear() === bookedDate.getFullYear() &&
        !isPastDate(date) // Ensure date is not in the past
      );
    });
  };

  const isHoliday = (date) => {
    return (
      holidays &&
      holidays.some((holidayDate) => {
        return (
          date.getDate() === holidayDate.getDate() &&
          date.getMonth() === holidayDate.getMonth() &&
          date.getFullYear() === holidayDate.getFullYear() &&
          !isPastDate(date) // Ensure date is not in the past
        );
      })
    );
  };

  const isFutureDate = (date) => {
    const currentDate = new Date();
    const fourMonthsAhead = new Date();
    fourMonthsAhead.setMonth(currentDate.getMonth() + 4);
    return date > fourMonthsAhead;
  };

  const isPastDate = (date) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return date < currentDate;
  };

  const handleDateSelect = (date) => {
    if (!isFutureDate(date) && !isPastDate(date)) {
      if (selectedDates.length === 2) {
        setSelectedDates([date]);
        onDateSelect([date]);
      } else if (selectedDates.length === 1 && date > selectedDates[0]) {
        setSelectedDates([selectedDates[0], date]);
        onDateSelect([selectedDates[0], date]);
      } else {
        setSelectedDates([date]);
        onDateSelect([date]);
      }
    }
  };

  const tileClassName = ({ date }) => {
    let className = "default-tile"; // Default styling for all tiles

    if (isBooked(date)) {
      className = "booked-tile"; // Apply booked styling
    } else if (isHoliday(date)) {
      className = "holiday-tile"; // Apply holiday styling
    } else if (
      selectedDates.length === 2 &&
      date >= selectedDates[0] &&
      date <= selectedDates[1]
    ) {
      className = "selected-range-tile"; // Apply styling for selected date range
    } else {
      className = "available-tile"; // Apply available date styling
    }

    return className;
  };

  const tileDisabled = ({ date }) => {
    // Disable the date if it's already booked, a holiday, or more than 4 months in the future
    return (
      isBooked(date) ||
      isHoliday(date) ||
      isFutureDate(date) ||
      isPastDate(date)
    );
  };

  return (
    <div className="booking-calendar-container">
      {loading ? (
        <CircularProgress />
      ) : (
        <Calendar
          tileClassName={tileClassName}
          tileDisabled={tileDisabled}
          value={selectedDates}
          onChange={handleDateSelect}
          selectRange={true}
        />
      )}
    </div>
  );
};

export default BookingCalendar;
