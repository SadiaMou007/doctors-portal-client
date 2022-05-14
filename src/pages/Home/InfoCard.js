import React from "react";

export const InfoCard = ({ img, color, cardTitle }) => {
  return (
    <div className={`card lg:card-side shadow-xl c p-4 text-white ${color}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};
