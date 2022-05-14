import React from "react";
import doctor from "../../assets/images/doctor.png";
import bg from "../../assets/images/appointment.png";

const MakeAppoinment = () => {
  return (
    <div
      className="flex mb-24 mt-6 text-white"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="w-1/2 ml-12">
        <img src={doctor} alt="" className="w-full h-96" />
      </div>
      <div className="w-1/2 my-auto">
        <h3 className="text-xl text-secondary font-bold uppercase">
          Appoinment
        </h3>
        <h2 className="text-2xl uppercase">Make an Appoinment Today</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          praesentium, recusandae corporis dolores soluta quod animi repudiandae
          veritatis facere velit suscipit, nesciunt sint explicabo illo
          obcaecati voluptas necessitatibus. Voluptates delectus velit
          consequatur dolorem omnis illum, repellat aut sequi nesciunt harum.
        </p>
      </div>
    </div>
  );
};

export default MakeAppoinment;
