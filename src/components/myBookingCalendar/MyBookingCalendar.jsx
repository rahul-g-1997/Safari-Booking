import { useState } from "react";
import Calendar from "@demark-pro/react-booking-calendar";

const reserved = [
  {
    startDate: new Date(2023, 3, 22),
    endDate: new Date(2016, 4, 0),
  },
];

export default function MyBookingCalendar() {
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange = (e) => setSelectedDates(e);

  return (
    <Calendar
      selected={selectedDates}
      onChange={handleChange}
      onOverbook={(e, err) => alert(err)}
      components={{
        // eslint-disable-next-line react/prop-types
        DayCellFooter: ({ innerProps }) => (
          <div {...innerProps}>My custom day footer</div>
        ),
      }}
      disabled={(date, state) => !state.isSameMonth}
      reserved={reserved}
      variant="events"
      dateFnsOptions={{ weekStartsOn: 1 }}
      range={true}
    />
  );
}
