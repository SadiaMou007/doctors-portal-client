import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
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
        <p>
          <small>Price: ${price}</small>
        </p>

        <label
          htmlFor="booking-modal"
          onClick={() => setTreatment(service)}
          className="btn btn-sm btn-secondary text-white "
          disabled={slots.length === 0}
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default Service;
