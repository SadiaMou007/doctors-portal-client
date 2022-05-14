import React from "react";
import treatment from "../../assets/images/treatment.png";
import Gradient from "../Shared/Gradient";

const Treatment = () => {
  return (
    <div className="hero shadow-xl mb-28 rounded">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-lg rounded-lg shadow-2xl h-96"
          alt=""
        />
        <div className="px-12">
          <h1 className="text-3xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-3">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, inventore!
          </p>
          <Gradient>Book Now</Gradient>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
