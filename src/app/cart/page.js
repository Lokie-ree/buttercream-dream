"use client";

import React, { useContext } from "react";
import CartEmptyState from "@/components/cart/CartEmptyState";
import CartSummary from "@/components/cart/CartSummary";
import CartItem from "@/components/cart/CartItem";
import { CartContext } from "@/components/context/CartContext";

export default function CartPage() {
  const { cartItems, updateItemQuantity, removeItemFromCart } =
    useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6 md:p-12 min-h-screen bg-base-100">
      <h1 className="text-3xl md:text-5xl text-accent font-bold mb-8">
        Your Cart
      </h1>

      {/* If cart is empty, show CartEmptyState */}
      {cartItems.length === 0 ? (
        <CartEmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Cart Items Card */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateItemQuantity={updateItemQuantity}
                removeItem={removeItemFromCart}
                showImage={true}
              />
            ))}
          </div>
          {/* Cart Summary Card */}
          <div className="lg:col-span-1">
            <CartSummary subtotal={subtotal} />
          </div>
        </div>
      )}
    </div>
  );
}
