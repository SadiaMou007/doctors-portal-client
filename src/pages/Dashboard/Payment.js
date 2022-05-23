import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L2btiBcjbCApLFSzNEfZQMUDQZ7ZduhoqMdcdyHnS2AuLR1UBVWokgi9glQP9kDSLtMAYxTMrv7zYV6PPXDEMXu0064C0qOpI"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://arcane-plains-24489.herokuapp.com/booking/${id}`;

  const { data: booked, isLoading } = useQuery("booked", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="text-center my-3 text-xl shadow-xl p-3 w-3/4 mx-auto">
        <h2 className="text-primary">Hello {booked.patientName}</h2>
        <h2>
          Your appointment for : {booked.treatment} at {booked.slot}
        </h2>
        <h2>Total bill : ${booked.price}</h2>
      </div>
      <div className="my-12 text-xl shadow-xl p-3 w-3/4 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm booked={booked} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
