import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Reviews from "./Reviews";
import Services from "./Services";
import Treatment from "./Treatment";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Info />
      <Services />
      <Treatment />
      <MakeAppoinment />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
