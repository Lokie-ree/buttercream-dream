import React from "react";

const CartSummary = ({ cartItems }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-accent mb-4">Order Summary</h3>
      <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>

      {/* Checkout Button */}
      <button className="btn btn-accent w-full mt-6">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
