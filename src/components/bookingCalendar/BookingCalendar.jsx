import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./bookingCalendar.css"; // Import your custom CSS file for BookingCalendar

const BookingCalendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const bookedDates = [
   
    new Date(2024, 3, 25),
    new Date(2024, 3, 26),
    new Date(2024, 3, 27),
    new Date(2024, 3, 29),
  ];

  const holidays = [new Date(2024, 3, 27), new Date(2024, 3, 30)]; // Define your holiday dates here

  const isBooked = (date) => {
    return bookedDates.some((bookedDate) => {
      return (
        date.getDate() === bookedDate.getDate() &&
        date.getMonth() === bookedDate.getMonth() &&
        date.getFullYear() === bookedDate.getFullYear()
      );
    });
  };

  const isHoliday = (date) => {
    return holidays.some((holidayDate) => {
      return (
        date.getDate() === holidayDate.getDate() &&
        date.getMonth() === holidayDate.getMonth() &&
        date.getFullYear() === holidayDate.getFullYear()
      );
    });
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
    if (!isBooked(date) && !isFutureDate(date)) {
      setSelectedDate(date);
      onDateSelect(date);
    }
  };

  const tileClassName = ({ date }) => {
    let className = "default-tile"; // Default styling for all tiles

    if (isBooked(date)) {
      className = "booked-tile"; // Apply booked styling
    } else if (isHoliday(date)) {
      className = "holiday-tile"; // Apply holiday styling
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
      <Calendar
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
        value={selectedDate}
        onChange={handleDateSelect}
      />
    </div>
  );
};

export default BookingCalendar;
