import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div class="hero h-[80vh] bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <div className="mb-2">
          <h1 class="text-5xl font-bold">Your New Smiles Starts Here!</h1>
          <p class="p-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-cyan-700">
            Get Started
          </button>
        </div>
        <div className="h-full">
          <img src={chair} class="max-w-lg rounded-lg shadow-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
