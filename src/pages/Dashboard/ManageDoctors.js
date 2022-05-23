import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState("");

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://arcane-plains-24489.herokuapp.com/doctors").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl text-center my-3">
        Total doctor: {doctors.length}
      </h1>

      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <DoctorRow
              key={doctor._id}
              doctor={doctor}
              index={index}
              refetch={refetch}
              setDeleteDoctor={setDeleteDoctor}
            ></DoctorRow>
          ))}
        </tbody>
      </table>
      {setDeleteDoctor && (
        <DeleteConfirmModal
          deleteDoctor={deleteDoctor}
          setDeleteDoctor={setDeleteDoctor}
          refetch={refetch}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;
