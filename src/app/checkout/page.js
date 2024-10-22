"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/context/CartContext";
import CheckoutForm from "@/components/stripe/CheckoutForm";
import StripeWrapper from "@/components/stripe/Stripewrapper";

export default function CheckoutPage() {
  const { cartItems } = useContext(CartContext);
  const [clientSecret, setClientSecret] = useState("");

  // On page load, create a payment intent
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cartItems.map((item) => ({
              id: item.id,
              quantity: item.quantity,
              price: item.price,
            })),
          }),
        });

        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
      } catch (error) {
        console.error("Error creating payment intent: ", error);
      }
    };

    if (cartItems.length > 0) {
      createPaymentIntent();
    }
  }, [cartItems]);

  return (
    <div className="container min-h-screen mx-auto p-6 md:p-12 bg-base-100">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-accent mb-6 md:mb-10">
        Checkout
      </h1>
      <StripeWrapper>
        {/* Show CheckoutForm if clientSecret is available */}
        {clientSecret ? (
          <CheckoutForm clientSecret={clientSecret} />
        ) : (
          <p>Loading payment details...</p>
        )}
      </StripeWrapper>
    </div>
  );
}
