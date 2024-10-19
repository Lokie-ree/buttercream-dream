import React from "react";
import Link from "next/link";

const CartSummary = ({ subtotal }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg md:text-xl lg:text-3xl md:pb-4 text-primary font-bold">
        Subtotal: ${subtotal.toFixed(2)}
      </p>
      <Link href="/cart">
        <button className="btn btn-accent btn-block text-base-100 md:text-2xl mt-2 hover:bg-neutral hover:text-primary">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
