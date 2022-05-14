import React from "react";
import quotes from "../../assets/icons/quote.svg";
import p1 from "../../assets/images/people1.png";
import p2 from "../../assets/images/people2.png";
import p3 from "../../assets/images/people3.png";
import Review from "./Review";
const Reviews = () => {
  const customerReview = [
    { _id: 1, img: p1, name: "Wilson Harry", address: "California" },
    { _id: 2, img: p2, name: "Wilson Harry", address: "California" },
    { _id: 3, img: p3, name: "Wilson Harry", address: "California" },
  ];
  return (
    <div className="mb-24">
      <div className="flex justify-between">
        <div>
          <h6 className="text-secondary text-xl uppercase my-3 font-bold">
            reviews
          </h6>
          <h2 className="text-2xl uppercase my-3">what our patients says</h2>
        </div>
        <div>
          <img src={quotes} alt="" className="h-40" />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
        {customerReview.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
