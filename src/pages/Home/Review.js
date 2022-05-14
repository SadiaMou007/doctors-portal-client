import React from "react";

const Review = ({ review }) => {
  return (
    <div className="">
      <div className="card lg:max-w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            nesciunt excepturi accusamus delectus veritatis quasi quisquam sunt
            impedit quos ducimus itaque, sapiente cum praesentium veniam
            adipisci repellendus magnam quo incidunt! Asperiores reiciendis illo
            quam aspernatur sit?
          </p>
        </div>
        <div className="flex p-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className="m-4">
            <h2 className="card-title">{review.name}</h2>
            <h2 className="card-title">{review.address}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
