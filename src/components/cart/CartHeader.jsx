import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const CartHeader = ({ toggleCart }) => {
  return (
    <div className="relative mb-4">
      <button
        className="absolute top-4 right-4"
        onClick={toggleCart}
        aria-label="Close Cart"
      >
        <IoCloseOutline size={32} className="hover:text-neutral" />
      </button>
      <h2 className="text-2xl font-bold">Your Cart</h2>
    </div>
  );
};

export default CartHeader;
