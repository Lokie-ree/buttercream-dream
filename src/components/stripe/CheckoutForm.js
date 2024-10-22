"use client";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else if (paymentIntent.status === "succeeded") {
      setSucceeded(true);
      setProcessing(false);
      // Handle successful payment here (confirmation message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <CardElement className="p-4 border rounded-lg" />
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <button
        className="btn btn-primary mt-6 w-full text-base-100 hover:bg-neutral hover:text-primary"
        type="submit"
        disabled={processing || !stripe || !elements}
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
      {succeeded && <p className="text-green-500 mt-4">Payment Successful!</p>}
    </form>
  );
};

export default CheckoutForm;
