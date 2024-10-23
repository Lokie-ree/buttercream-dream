"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

export default function SuccessPage() {
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
    <div className="container mx-auto min-h-screen p-6 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-green-600 mb-6">
        Payment Successful!
      </h1>
      <p className="text-md md:text-xl">
        Your payment was processed successfully.
      </p>
      <p className="mb-4 text-md md:text-xl">Thank you for your purchase!</p>
      <Link href="/">
        <button className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary">
          Return to Home
        </button>
      </Link>
    </div>
  );
}
