import React from "react";
import Link from "next/link";

const CheckoutButton = ({ disabled }) => {
  return (
    <Link href="/checkout">
      <button className="btn btn-primary w-full" disabled={disabled}>
        Proceed to Checkout
      </button>
    </Link>
  );
};

export default CheckoutButton;
