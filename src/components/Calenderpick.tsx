import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./calender.css";


export default function Calenderpick() {
  const [selectedDayRange, setSelectedDayRange] = useState({from:null,to:null});
  const handleDateChange = ({ from, to }) => {
    setSelectedDayRange({ from, to });
  };
  return (
    <div>
      <Calendar
        value={selectedDayRange}
        onChange={handleDateChange}
        calendarClassName="responsive-calendar"
        minimumDate={selectedDayRange.from}
        maximumDate={selectedDayRange.to}
        // colorPrimary="#0fbcf9" // added this
        calendarTodayClassName="responsive-calendar"
        // colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
        shouldHighlightWeekends
      />
        <p>From: {selectedDayRange.from ? `-${selectedDayRange.from.day}-${selectedDayRange.from.month}-${selectedDayRange.from.year}` : 'Not selected'}</p>
        <p>To: {selectedDayRange.to ? `${selectedDayRange.to.day}-${selectedDayRange.to.month}-${selectedDayRange.from.year}` : 'Not selected'}</p>
    </div>
  );
}
