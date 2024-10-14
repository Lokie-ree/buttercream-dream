import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartSummaryCard = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-accent mb-4">Order Summary</h3>
      <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>

      {/* Checkout Button */}
      <button className="btn btn-accent w-full text-base-100 hover:text-primary hover:bg-neutral mt-5">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummaryCard;
