import React from "react";
import CheckoutButton from "./CheckoutButton";

const CartSummary = ({ cartItems, subtotal }) => {
  const isCartEmpty = subtotal === 0;

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      return;
    }

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        }),
      });

      const session = await response.json();
      if (session.url) {
        window.location.href = session.url; // Redirect to Stripe checkout
      } else {
        console.error("Checkout session creation failed:", session.error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div className="p-4 md:p-0 bg-base-200 rounded-lg text-center">
      <h3 className="text-lg md:text-2xl font-bold text-primary">
        Cart Summary
      </h3>
      <div className="mt-2">
        <p className="text-sm md:text-lg font-semibold text-secondary">
          Subtotal:{" "}
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </p>
      </div>
      <div className="mt-4">
        <CheckoutButton
          disabled={isCartEmpty}
          handleCheckout={handleCheckout}
          className="md:text-xl md:w-auto"
        />
      </div>
    </div>
  );
};

export default CartSummary;
