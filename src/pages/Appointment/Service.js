import React from "react";
const { a, b } = { x: 2, y: 3 };
console.log(b);

const Service = ({ service, setTreatment }) => {
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

        <label
          for="booking-modal"
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
