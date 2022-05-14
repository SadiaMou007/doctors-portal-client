import React from "react";

const Review = ({ review }) => {
  return (
    <div className="">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            nesciunt excepturi accusamus delectus veritatis quasi quisquam sunt
            impedit quos ducimus itaque, sapiente cum praesentium veniam
            adipisci repellendus magnam quo incidunt! Asperiores reiciendis illo
            quam aspernatur sit?
          </p>
        </div>
        <div className="flex p-5">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} />
            </div>
          </div>
          <div className="m-4">
            <h2 class="card-title">{review.name}</h2>
            <h2 class="card-title">{review.address}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
