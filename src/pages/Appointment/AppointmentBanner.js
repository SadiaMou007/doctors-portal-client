import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  console.log(date);
  return (
    <div class="hero min-h-[90vh]">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" class="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
        <p>You have selected: {format(date, "P")}</p>
      </div>
    </div>
  );
};

export default AppointmentBanner;
