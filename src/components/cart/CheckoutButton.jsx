import React from "react";

const CheckoutButton = ({ disabled, handleCheckout, className = "" }) => {
  return (
    <button
      className={`btn btn-accent text-base-100 hover:bg-neutral hover:text-primary w-full ${className}`}
      onClick={handleCheckout}
      disabled={disabled}
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
