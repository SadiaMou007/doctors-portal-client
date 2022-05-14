import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Reviews from "./Reviews";
import Services from "./Services";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services />
      <Treatment />
      <MakeAppoinment />
      <Reviews />
    </div>
  );
};

export default Home;
