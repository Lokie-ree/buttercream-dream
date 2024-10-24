"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionData, setSessionData] = useState("null");
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchSessionData = async () => {
      if (sessionId) {
        try {
          const response = await fetch(
            `/api/get-checkout-session?session_id=${sessionId}`
          );
          const data = await response.json();
          setSessionData(data);
        } catch (error) {
          console.error("Error fetching session data: ", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSessionData();
  }, [sessionId]);

  if (loading) {
    return <div>Loading your order details...</div>;
  }

  if (!sessionData) {
    return <div>Order details could not be delivered.</div>;
  }

  // Extract the relevant data from the session object
  const customerEmail = sessionData.customer_details?.email;
  const amountTotal = (sessionData.amount_total / 100).toFixed(2);
  const lineItems = sessionData.line_items?.data || [];

  useEffect(() => {
    const sprinkleConfetti = () => {
      const end = Date.now() + 3 * 1000;

      const colors = [
        "#F5E607",
        "#C31886",
        "#7018C3",
        "#18BCC3",
        "#EC7D3A",
        "#87F507",
      ];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
          scalar: 0.9,
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
          scalar: 0.9,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    };
    sprinkleConfetti();
  }, []);

  return (
    <div className="container mx-auto min-h-screen text-center p-6 ">
      <h1 className="text-2xl font-bold text-green-600 mb-6">
        Payment Successful!
      </h1>
      <p className="mb-4 text-md md:text-xl">Thank you for your purchase.</p>

      {customerEmail && (
        <p className="text-md mt-2">
          A receipt has been sent to <strong>{customerEmail}</strong>
        </p>
      )}
      <h2 className="text-xl font-bold mt-6">Order Summary</h2>
      <p className="text-md mt-1">
        Total Paid: <strong>${amountTotal}</strong>
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2"> Purchased Items:</h3>
        <ul className="list-inside">
          {lineItems.map((item, index) => (
            <li key={index} className="text-md">
              {item.description} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-md mt-8">
        If you have any questions, please contact me at{" "}
        <strong>blee73011@gmail.com</strong>
      </p>
      <Link href="/">
        <button className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary mt-4">
          Return to Home
        </button>
      </Link>
    </div>
  );
}
