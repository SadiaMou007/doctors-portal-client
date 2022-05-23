import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user] = useAuthState(auth);

  const handleSubmit = (e) => {
    const slot = e.target.slot.value;
    e.preventDefault();
    const formattedDate = format(date, "PP");

    const booking = {
      treatmentID: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    fetch("https://arcane-plains-24489.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment is set: ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
          console.log(data);
        }
        setTreatment(null);
        refetch();
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-1 gap-3 justify-items-center p-3"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="number"
              name="phone"
              placeholder="Your Phone Number"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
