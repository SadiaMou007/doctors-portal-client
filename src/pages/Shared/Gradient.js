import React from "react";

const Gradient = ({ children }) => {
  return (
    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-cyan-700">
      {children}
    </button>
  );
};

export default Gradient;
