import React from "react";

const CheckoutButton = ({ disabled, handleCheckout }) => {
  return (
    <button
      className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary w-full"
      onClick={handleCheckout}
      disabled={disabled}
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
