"use client";

import { IoMdPrint } from "react-icons/io";
import confetti from "canvas-confetti";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "next/navigation";
import { CartContext } from "@/components/context/CartContext";

export const dynamic = "force-dynamic";

// This is a server component in the App Router
export default function SuccessPage() {
  const [sessionData, setSessionData] = useState(null);
  const [cartCleared, setCartCleared] = useState(false);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        console.log("Session ID from URL: ", sessionId);

        if (!sessionId) return;

        // Fetch session data from Stripe
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DOMAIN}/api/get-checkout-session?session_id=${sessionId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch session data");
        }

        const data = await response.json();
        setSessionData(data);
        console.log("Session data: ", data);
      } catch (error) {
        console.error("Error fetching session data: ", error.message);
        console.log(error);
      }
    };

    fetchSessionData();
  }, [sessionId]);

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

    if (sessionData && !cartCleared) {
      clearCart();
      setCartCleared(true);
      sprinkleConfetti();
    }
  }, [sessionData, clearCart, cartCleared]);

  const customerEmail = sessionData?.customer_details?.email;
  const amountTotal = (sessionData?.amount_total / 100).toFixed(2);
  const lineItems = sessionData?.line_items?.data || [];
  const shippingAddress = sessionData?.shipping?.address;

  return (
    <>
      {sessionData ? (
        <div className="container mx-auto min-h-screen p-6">
          <div className="max-w-3xl mx-auto bg-base-100 shadow-lg rounded-lg p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-accent mb-6">
              Payment Successful!
            </h1>
            <p className="text-md md:text-lg text-secondary mb-4">
              Thank you for your purchase. Your order number is{" "}
              <strong>{sessionData.id.slice(-8)}</strong>. A receipt has been
              emailed to <strong>{customerEmail}</strong>.
            </p>

            <div className="divider divider-primary"></div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-accent mb-2">
                  Order Summary
                </h2>
                <p className="text-md md:text-lg text-secondary mb-2">
                  Total Paid: <strong>${amountTotal}</strong>
                </p>
              </div>
              <div className="flex items-end">
                <button
                  className="btn btn-md btn-accent text-base-100 hover:bg-neutral hover:text-primary ml-auto"
                  onClick={() => window.print()}
                >
                  <IoMdPrint size={22} />
                </button>
              </div>
            </div>

            {shippingAddress && (
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-accent mb-2">
                  Shipping Address
                </h3>
                <p className="text-md md:text-lg text-secondary">
                  {shippingAddress.line1}, {shippingAddress.city},{" "}
                  {shippingAddress.state} {shippingAddress.postal_code},{" "}
                  {shippingAddress.country}
                </p>
              </div>
            )}

            <div className="divider divider-primary"></div>

            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-accent mb-2">
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
                        <td className="py-2 text-secondary">
                          {item.description}
                        </td>
                        <td className="py-2 text-secondary">{item.quantity}</td>
                        <td className="py-2 text-secondary">
                          ${(item.amount_total / 100).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-md text-secondary mb-6">
              If you have any questions, please contact me at{" "}
              <strong>blee73011@gmail.com</strong>
            </p>
            <div className="divider divider-primary"></div>
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
      ) : (
        <p>Error loading data...</p>
      )}
    </>
  );
}
