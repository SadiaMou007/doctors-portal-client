import React from "react";
import Gradient from "../Shared/Gradient";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-xl my-3">
      <div className="card-body items-center text-center text-primary">
        <h2 className="card-title">{name}</h2>
        {slots.length ? (
          <span>{slots[0]}</span>
        ) : (
          <span className="text-red-500">No slot available</span>
        )}
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <button
          disabled={slots.length === 0}
          className="btn btn-secondary text-white "
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Service;
