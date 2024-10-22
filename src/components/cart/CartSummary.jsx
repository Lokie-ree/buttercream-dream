import React from "react";
import CheckoutButton from "./CheckoutButton";

const CartSummary = ({ subtotal }) => {
  const isCartEmpty = subtotal === 0;

  return (
    <div className="p-4 bg-base-200 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold">Cart Summary</h3>
      <div className="mt-2">
        <p className="text-sm">
          Subtotal:{" "}
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </p>
      </div>
      <div className="mt-4">
        <CheckoutButton disabled={isCartEmpty} />
      </div>
    </div>
  );
};

export default CartSummary;
