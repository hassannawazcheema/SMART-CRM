import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Sidebar1 from '../components/Sidebar1'

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex min-h-screen bg-[#d4d4ce] p-6">
      <Sidebar1/>
      <div className="mt-24 lg:ml-64 ">
      <h2 className="text-3xl font-bold text-[#023246] mb-4">Select a Date</h2>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <Calendar
          onChange={setDate}
          value={date}
          className="border-none"
        />
      </div>
      <p className="mt-4 text-lg font-semibold text-[#287094]">
        Selected Date: {date.toDateString()}
      </p>
      </div>
    </div>
  );
};

export default CustomCalendar;
