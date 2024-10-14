"use client";

import React, { useContext } from "react";
import CartEmptyState from "@/components/layout/CartEmptyState";
import CartSummaryCard from "@/components/cards/CartSummary";
import CartItemCard from "@/components/cards/CartItemCard";
import { CartContext } from "@/components/context/CartContext";

export default function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="container mx-auto p-6 md:p-12 min-h-screen bg-base-100">
      <h1 className="text-3xl md:text-5xl text-accent font-bold mb-8">
        Your Cart
      </h1>

      {/* If cart is empty, show empty state component */}
      {cartItems.length === 0 ? (
        <CartEmptyState />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Card */}
          <div className="lg:col-span-2">
            {cartItems.map((item, index) => (
              <CartItemCard key={index} item={item} />
            ))}
          </div>
          {/* Cart Summary Card */}
          <div className="lg:col-span-1">
            <CartSummaryCard />
          </div>
        </div>
      )}
    </div>
  );
}
