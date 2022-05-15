import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppoinments from "./AvailableAppoinments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppoinments date={date}></AvailableAppoinments>
      <Footer />
    </div>
  );
};

export default Appointment;
