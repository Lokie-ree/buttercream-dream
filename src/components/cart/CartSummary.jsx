"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const CartSummary = ({ cartItems, subtotal }) => {
  const [zipCode, setZipCode] = useState("");
  const isCartEmpty = subtotal === 0;
  const allowedZipCodes = [
    "70764",
    "70788",
    "70346",
    "70710",
    "70767",
    "70737",
    "70718",
    "70707",
  ];

  const handleCheckout = async () => {
    if (isCartEmpty) return;

    if (!allowedZipCodes.includes(zipCode)) {
      alert("Sorry, we only offer local delivery to specific zip codes");
      return;
    }

    try {
      console.log("Initiating checkout process...");

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
      console.log("Session data:", session); // Log session data

      if (session.id) {
        console.log("Loading Stripe with publishable key..."); // Check key availability
        const stripe = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        );

        if (!stripe) {
          console.error("Failed to load Stripe. Check publishable key.");
          alert("Unable to initialize Stripe. Please try again.");
          return;
        }

        console.log("Redirecting to Stripe Checkout...");
        await stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        console.error("Failed to retrieve session ID from response.");
        alert("Failed to create checkout session. Please try again.");
      }
    } catch (error) {
      console.error("Error in handleCheckout:", error);
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
        <label className="text-sm md:text-lg font-semibold text-secondary">
          Enter Delivery Zip Code
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.trim())}
            className="input input-accent w-full mt-2 mb-2"
            placeholder="Enter Zip Code"
          />
        </label>
        <div className="card-actions">
          <button
            className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary w-full"
            onClick={handleCheckout}
            disabled={isCartEmpty || !zipCode}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
