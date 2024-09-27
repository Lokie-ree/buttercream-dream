import React from "react";
import { FaCartPlus } from "react-icons/fa";

const AddToCartButton = () => {
  return (
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent text-base-100 hover:text-accent hover:bg-neutral">
      <FaCartPlus size={22} />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
