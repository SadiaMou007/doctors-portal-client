import React from "react";
import Service from "./Service";
import img1 from "../../assets/images/fluoride.png";
import img2 from "../../assets/images/cavity.png";
import img3 from "../../assets/images/whitening.png";

const Services = () => {
  const services = [
    { _id: 1, name: "Fluoride Treatment", description: "", img: img1 },
    { _id: 2, name: "Cavity Filling", description: "", img: img2 },
    { _id: 3, name: "Teeth Whitening", description: "", img: img3 },
  ];
  return (
    <div>
      <div className="text-center my-28">
        <h6 className="text-secondary text-xl uppercase my-3 font-bold">
          our services
        </h6>
        <h2 className="text-2xl uppercase my-3">services we provide</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
