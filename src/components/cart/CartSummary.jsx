import React from "react";
import Link from "next/link";

const CartSummary = ({ subtotal }) => {
  return (
    <div className="mt-4">
      <p className="text-lg font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
      <Link href="/cart">
        <button className="btn btn-accent btn-block text-base-100 mt-2 hover:bg-neutral hover:text-primary">
          View Cart
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
