import React, { useState } from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
  const { email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={doctor.img} alt="" />
          </div>
        </div>
      </td>
      <td>{doctor.name}</td>
      <td>{doctor.specialty}</td>
      <td>
        <label
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
          onClick={() => setDeleteDoctor(doctor)}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
