import React from "react";
import i1 from "../../assets/icons/clock.svg";
import i2 from "../../assets/icons/marker.svg";
import i3 from "../../assets/icons/phone.svg";
import { InfoCard } from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
      <InfoCard
        img={i1}
        cardTitle="Opening Hours"
        color="bg-gradient-to-r from-primary to-cyan-700"
      ></InfoCard>
      <InfoCard
        img={i2}
        cardTitle="Our Location"
        color="bg-gradient-to-r from-secondary to-yellow-400"
      ></InfoCard>
      <InfoCard
        img={i3}
        cardTitle="Contact Us"
        color="bg-gradient-to-r from-primary to-cyan-700"
      ></InfoCard>
    </div>
  );
};

export default Info;
