import React from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppoinments from "./AvailableAppoinments";

const Appointment = () => {
  return (
    <div>
      <AppointmentBanner />
      <AvailableAppoinments />
      <Footer />
    </div>
  );
};

export default Appointment;
