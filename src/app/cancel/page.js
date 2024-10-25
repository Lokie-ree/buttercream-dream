"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="container mx-auto min-h-screen p-6">
      <div className="max-w-xl mx-auto bg-base-100 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-accent text-center mb-6">
          Payment Canceled
        </h1>
        <p className="text-lg text-secondary mb-4">
          Your payment was canceled. You can return to your cart or continue
          browsing the store.
        </p>

        <div className="divider divider-primary"></div>

        <h2 className="text-xl font-semibold text-accent mb-2">
          Canceled Order Summary
        </h2>
        <p className="text-md text-secondary mb-4">
          No charges were made. Feel free to review your cart and complete the
          purchase at a later time.
        </p>

        <div className="divider divider-primary"></div>

        <p className="text-md text-secondary mb-6">
          If you have any questions, please contact us at{" "}
          <strong>blee73011@gmail.com</strong>
        </p>

        <div className="flex flex-col gap-3">
          {/* Button to return to the cart */}
          <Link href="/cart">
            <button className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary w-full">
              Return to Cart
            </button>
          </Link>

          {/* Button to return to the home page */}
          <Link href="/shop">
            <button className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary w-full">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
