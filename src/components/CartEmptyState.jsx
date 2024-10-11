import React from "react";

const CartEmptyState = () => {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        Your cart is empty.
      </h2>
      <p className="text-sm text-gray-500">
        Oops! It looks like you haven't added anything to your cart yet.
      </p>
    </div>
  );
};

export default CartEmptyState;
