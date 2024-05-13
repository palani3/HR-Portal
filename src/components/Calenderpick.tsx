import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { GoDotFill } from "react-icons/go";
import "./calender.css";
import { render } from "react-dom";

function footer(){
  return(
    <div className="flex  px-10 py-2">
      <GoDotFill color="#EF2B1F" size={18} />
      <p className="text-sm mr-10">Govt Holiday</p>
     
      <GoDotFill color="#1E88E5" size={18}  />
      <p className="text-sm">leave</p>
  


    </div>
  )
}
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
        // slideAnimationDuration="1s"
        renderFooter={footer}
      />
       

      <div className="flex p-2">
        <p className="mx-2">From: {selectedDayRange.from ? `-${selectedDayRange.from.day}-${selectedDayRange.from.month}-${selectedDayRange.from.year}` : 'Not selected'}</p>
        <p>To: {selectedDayRange.to ? `${selectedDayRange.to.day}-${selectedDayRange.to.month}-${selectedDayRange.from.year}` : 'Not selected'}</p>
    </div>
    </div>
  );
}
