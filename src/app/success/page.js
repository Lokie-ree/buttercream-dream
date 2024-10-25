"use client";

import { useEffect, useState, useContext } from "react";
import { CartContext } from "@/components/context/CartContext";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    const fetchSessionData = async () => {
      // Fetch data if sessionId exists and sessionData is null
      if (sessionId && !sessionData) {
        try {
          const response = await fetch(
            `/api/get-checkout-session?session_id=${sessionId}`
          );
          const data = await response.json();

          if (response.status !== 200) {
            setError(data.error || "Payment was not completed.");
          } else {
            setSessionData(data);
            clearCart(); // Clear the cart once payment is successful
          }
        } catch (err) {
          console.error("Error fetching session data: ", err);
          setError("Something went wrong.");
        } finally {
          setLoading(false); // Stop loading after data fetch
        }
      }
    };

    fetchSessionData();
  }, [sessionId, sessionData, clearCart]);

  // Confetti trigger useEffect
  useEffect(() => {
    const sprinkleConfetti = () => {
      const end = Date.now() + 2 * 1000;
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
          particleCount: 4,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors: colors,
          shapes: ["square"],
          scalar: 0.6,
          gravity: 1,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors: colors,
          shapes: ["square"],
          scalar: 0.6,
          gravity: 1,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    };

    if (!error && sessionData) {
      sprinkleConfetti();
    }
  }, [error, sessionData]); // Confetti runs only if no error and session data exists

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto min-h-screen p-6">
        <div className="max-w-xl mx-auto bg-base-100 shadow-lg rounded-lg p-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-accent rounded-box w-3/4"></div>
            <div className="h-6 bg-accent rounded-box w-5/6"></div>
            <div className="h-4 bg-accent rounded-box w-2/3"></div>
            <div className="h-8 bg-accent rounded-box w-1/2"></div>
            <div className="h-4 bg-accent rounded-box w-3/4"></div>
            <div className="h-6 bg-accent rounded-box w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto min-h-screen p-6">
        <div className="max-w-xl mx-auto bg-base-100 shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-6">Error</h1>
          <p className="text-lg text-secondary mb-4">{error}</p>
          <Link href="/shop">
            <button className="btn btn-accent w-full">Return to Shop</button>
          </Link>
        </div>
      </div>
    );
  }

  // Extract the relevant data from the session object
  const customerEmail = sessionData.customer_details?.email;
  const amountTotal = (sessionData.amount_total / 100).toFixed(2);
  const lineItems = sessionData.line_items?.data || [];

  return (
    <div className="container mx-auto min-h-screen p-6">
      <div className="max-w-xl mx-auto bg-base-100 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-accent mb-6">
          Payment Successful!
        </h1>
        <p className="text-lg text-secondary mb-4">
          Thank you for your purchase.
        </p>

        {customerEmail && (
          <p className="text-md text-secondary mb-4">
            A receipt has been sent to <strong>{customerEmail}</strong>
          </p>
        )}
        <div className="divider divider-primary"></div>
        <h2 className="text-xl font-semibold text-accent mb-2">
          Order Summary
        </h2>
        <p className="text-md text-secondary mb-2">
          Total Paid: <strong>${amountTotal}</strong>
        </p>
        <div className="divider divider-primary"></div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-accent mb-2">
            Purchased Items
          </h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full hidden md:table text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 pb-2 text-accent">Item</th>
                  <th className="border-b-2 pb-2 text-accent">Quantity</th>
                  <th className="border-b-2 pb-2 text-accent">Price</th>
                </tr>
              </thead>
              <tbody>
                {lineItems.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 text-secondary">{item.description}</td>
                    <td className="py-2 text-secondary">{item.quantity}</td>
                    <td className="py-2 text-secondary">
                      ${(item.amount_total / 100).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden">
            {lineItems.map((item, index) => (
              <div
                key={index}
                className="border border-accent rounded-box p-3 mb-2"
              >
                <p className="text-secondary font-semibold">
                  {item.description}
                </p>
                <p className="text-sm text-secondary">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-secondary">
                  Price: ${(item.amount_total / 100).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-md text-secondary mb-6">
          If you have any questions, please contact me at{" "}
          <strong>blee73011@gmail.com</strong>
        </p>
        <div className="flex flex-col justify-center gap-3">
          <Link href="/shop">
            <button className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary w-full">
              Continue Shopping
            </button>
          </Link>

          <Link href="/">
            <button className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary w-full">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
