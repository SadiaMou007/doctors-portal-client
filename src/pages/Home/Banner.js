import React from "react";
import chair from "../../assets/images/chair.png";
import bgBanner from "../../assets/images/bg.png";
import Gradient from "../Shared/Gradient";

const Banner = () => {
  return (
    <div
      className="hero min-h-[90vh]"
      style={{
        background: `url(${bgBanner})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="mb-2">
          <h1 className="text-5xl font-bold">Your New Smiles Starts Here!</h1>
          <p className="p-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Gradient>Get Started</Gradient>
        </div>
        <div className="h-full">
          <img src={chair} className="max-w-lg rounded-lg shadow-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
