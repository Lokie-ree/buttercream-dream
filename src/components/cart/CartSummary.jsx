import React from "react";

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
    <div className="card card-compact bg-base-100 w-full max-w-xl shadow-xl p-2 mt-4">
      <div className="card-body">
        <h2 className=" card-title text-lg md:text-2xl font-bold text-primary">
          Cart Summary
        </h2>
        <p className="text-sm md:text-lg font-semibold text-secondary">
          Subtotal:{" "}
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </p>
        <div className="card-actions">
          <button
            className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary w-full"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
