import React from "react";
import doctor from "../../assets/images/doctor.png";
import bg from "../../assets/images/appointment.png";
import Gradient from "../Shared/Gradient";

const MakeAppoinment = () => {
  return (
    <div
      className="flex mb-24 mt-6 text-white rounded"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="w-1/2 ml-12">
        <img
          src={doctor}
          alt=""
          className="w-full h-[80vh] mt-[-100px] hidden lg:block"
        />
      </div>
      <div className="w-full lg:w-1/2 p-4 m-auto">
        <h3 className="text-xl text-secondary font-bold uppercase my-2">
          Appoinment
        </h3>
        <h2 className="text-2xl uppercase my-2">Make an Appoinment Today</h2>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          praesentium, recusandae corporis dolores soluta quod animi repudiandae
          veritatis facere velit suscipit, nesciunt sint explicabo illo
          obcaecati voluptas necessitatibus. Voluptates delectus velit
          consequatur dolorem omnis illum, repellat aut sequi nesciunt harum.
        </p>
        <Gradient>Get Appoinment</Gradient>
      </div>
    </div>
  );
};

export default MakeAppoinment;
