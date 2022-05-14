import React from "react";
import bg from "../../assets/images/appointment.png";
import Gradient from "../Shared/Gradient";

const Contact = () => {
  return (
    <div
      className=" mb-24 mt-12 text-white rounded py-12"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="text-center">
        <h6 className="text-secondary text-xl uppercase my-3 font-bold">
          contact us
        </h6>
        <h2 className="text-2xl uppercase my-3">stay connected with us</h2>
      </div>
      <div className="w-1/2 mx-auto ">
        <input
          type="text"
          placeholder="Email Address"
          class="input input-bordered input-md w-full my-3 text-primary"
        />
        <input
          type="text"
          placeholder="Subject"
          class="input input-bordered input-md w-full my-3 text-primary"
        />
        <textarea
          class="textarea textarea-bordered w-full my-3 text-primary"
          placeholder="Your Message"
        ></textarea>
        <Gradient>Submit</Gradient>
      </div>
    </div>
  );
};

export default Contact;
