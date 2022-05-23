import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(
        `https://arcane-plains-24489.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          // console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setAppointments(data));
    }
  }, [user]);

  return (
    <div>
      <h3 className="text-center my-2">
        {" "}
        Total Appointment: {appointments.length}
      </h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Date</th>
              <th>Patient</th>
              <th>Time Slot</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr>
                <td>{++index}</td>
                <td>{a.date}</td>

                <td>{a.patientName}</td>

                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-error">pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div className="text-success">
                      <p> paid</p>
                      <span>Transaction Id:{a.transactionId}</span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
