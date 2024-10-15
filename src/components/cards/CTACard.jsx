import React from "react";

const CTACard = () => {
  return (
    <>
      <h2 className="text-center text-accent font-bold text-xl md:text-3xl">
        Get in Touch with Me!
      </h2>
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img
            src="../../../assets/brand_logo_240x240.jpg"
            alt="Brand Logo"
            className="rounded-box w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center">
            <button className="btn btn-accent text-base-100 w-full">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTACard;
